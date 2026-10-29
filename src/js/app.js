/**
 * PATITAS FELICES — LÓGICA DE INTERACCIÓN & AGENDAMIENTO EN 3 PASOS
 * Control del Wizard, validaciones accesibles WCAG AA, modal de urgencias
 * y Gestión Completa de Modo Oscuro con Persistencia en LocalStorage
 */

document.addEventListener("DOMContentLoaded", () => {
  // Estado global del flujo de agendamiento
  const state = {
    currentStep: 1,
    selectedService: null,
    petSpecies: "perro",
    petName: "",
    petAge: "adulto",
    reason: "",
    selectedDate: null,
    selectedTime: null,
    selectedDoctor: "Cualquier veterinario disponible",
    ownerName: "",
    ownerPhone: "",
    ownerEmail: "",
    bookingCode: ""
  };

  // Inicializar componentes
  initThemeToggle();
  initNavigation();
  initEmergencyModal();
  initBookingWizard(state);
  initServiceDetailModal(state);
  initMyPetsModal();
  renderServices(state);
  renderTeam();
  renderTestimonials();
});

/* ==========================================================================
   MODO OSCURO: GESTIÓN DE TEMA CON PERSISTENCIA EN LOCALSTORAGE
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtns = document.querySelectorAll(".theme-toggle-btn");
  const sunIcons = document.querySelectorAll(".theme-icon-sun");
  const moonIcons = document.querySelectorAll(".theme-icon-moon");

  function applyTheme(isDark) {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      sunIcons.forEach(icon => icon.classList.remove("hidden"));
      moonIcons.forEach(icon => icon.classList.add("hidden"));
      themeToggleBtns.forEach(btn => btn.setAttribute("aria-label", "Cambiar a modo claro"));
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      sunIcons.forEach(icon => icon.classList.add("hidden"));
      moonIcons.forEach(icon => icon.classList.remove("hidden"));
      themeToggleBtns.forEach(btn => btn.setAttribute("aria-label", "Cambiar a modo oscuro"));
    }
  }

  // Comprobar preferencia previa o preferencia del sistema
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialDark = savedTheme === "dark" || (!savedTheme && systemPrefersDark);
  
  applyTheme(initialDark);

  // Escuchar clics en los botones de cambio de tema (Desktop y Móvil)
  themeToggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const isCurrentlyDark = document.documentElement.classList.contains("dark");
      applyTheme(!isCurrentlyDark);
    });
  });

  // Escuchar cambios en la preferencia del sistema operativo en tiempo real
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
    if (!localStorage.getItem("theme")) {
      applyTheme(e.matches);
    }
  });
}

/* ==========================================================================
   NAVEGACIÓN & HEADER RESPONSIVE
   ========================================================================== */
function initNavigation() {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", !isExpanded);
      mobileNav.classList.toggle("hidden");
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.add("hidden");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
}

/* ==========================================================================
   MODAL DE EMERGENCIAS SOS (PERSISTENTE)
   ========================================================================== */
function initEmergencyModal() {
  const sosModal = document.getElementById("sos-modal");
  const openButtons = document.querySelectorAll(".open-sos-btn");
  const closeButton = document.getElementById("close-sos-btn");

  openButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      sosModal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });
  });

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      sosModal.classList.add("hidden");
      document.body.style.overflow = "auto";
    });
  }

  // Cerrar al pulsar Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !sosModal.classList.contains("hidden")) {
      sosModal.classList.add("hidden");
      document.body.style.overflow = "auto";
    }
  });
}

/* ==========================================================================
   WIZARD DE AGENDAMIENTO EN 3 PASOS
   ========================================================================== */
function initBookingWizard(state) {
  // Selector de especies (Chips interactivos con soporte oscuro)
  const speciesChips = document.querySelectorAll(".species-chip");
  speciesChips.forEach(chip => {
    chip.addEventListener("click", () => {
      speciesChips.forEach(c => {
        c.classList.remove("bg-emerald-700", "text-white", "border-emerald-700", "dark:bg-emerald-700");
        c.classList.add("bg-white", "text-slate-700", "border-slate-300", "dark:bg-slate-800", "dark:text-slate-200", "dark:border-slate-700");
      });
      chip.classList.remove("bg-white", "text-slate-700", "border-slate-300", "dark:bg-slate-800", "dark:text-slate-200", "dark:border-slate-700");
      chip.classList.add("bg-emerald-700", "text-white", "border-emerald-700");
      state.petSpecies = chip.getAttribute("data-species");
    });
  });

  // Selector de Servicio en Paso 1 (Templates adaptados a Dark Mode & optimizados para móvil)
  const serviceCardsContainer = document.getElementById("booking-services-list");
  if (serviceCardsContainer) {
    serviceCardsContainer.innerHTML = CLINIC_DATA.services.map(s => `
      <div class="service-select-card border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 rounded-2xl p-3.5 sm:p-4.5 cursor-pointer hover:border-emerald-600 dark:hover:border-emerald-500 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4" data-id="${s.id}">
        <div class="flex-1 min-w-0">
          <div class="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
            <h4 class="font-bold text-slate-900 dark:text-white text-base leading-snug">${s.name}</h4>
            <span class="text-[11px] sm:text-xs bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-semibold px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 shrink-0">${s.badge}</span>
          </div>
          <p class="text-slate-600 dark:text-slate-300 text-xs sm:text-sm line-clamp-2 leading-relaxed">${s.description}</p>
          <span class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium mt-1 inline-block">⏱ ${s.duration} de atención</span>
        </div>
        <div class="flex items-center sm:flex-col justify-between sm:justify-center sm:text-right pt-2.5 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-700/60 shrink-0">
          <span class="text-xs text-slate-500 dark:text-slate-400 sm:order-2">tarifa fija</span>
          <span class="text-base sm:text-lg font-extrabold text-emerald-800 dark:text-emerald-400 sm:order-1">${s.priceFormatted}</span>
        </div>
      </div>
    `).join("");

    const serviceCards = document.querySelectorAll(".service-select-card");
    serviceCards.forEach(card => {
      card.addEventListener("click", () => {
        serviceCards.forEach(c => {
          c.classList.remove("border-emerald-700", "bg-emerald-50/50", "dark:bg-emerald-950/40", "dark:border-emerald-500", "ring-2", "ring-emerald-600");
          c.classList.add("border-slate-200", "dark:border-slate-700");
        });
        card.classList.remove("border-slate-200", "dark:border-slate-700");
        card.classList.add("border-emerald-700", "dark:border-emerald-500", "bg-emerald-50/50", "dark:bg-emerald-950/40", "ring-2", "ring-emerald-600");
        
        const serviceId = card.getAttribute("data-id");
        state.selectedService = CLINIC_DATA.services.find(s => s.id === serviceId);
        
        document.getElementById("service-error").classList.add("hidden");
      });
    });

    // Auto-seleccionar primer servicio por defecto
    if (serviceCards.length > 0) {
      serviceCards[0].click();
    }
  }

  // Generar Calendario Interactivo en Paso 2
  setupCalendar(state);

  // Botón "Continuar al Paso 2"
  const toStep2Btn = document.getElementById("btn-to-step-2");
  if (toStep2Btn) {
    toStep2Btn.addEventListener("click", () => {
      const petNameInput = document.getElementById("pet-name");
      const petNameError = document.getElementById("pet-name-error");
      const serviceError = document.getElementById("service-error");

      let valid = true;

      if (!state.selectedService) {
        serviceError.classList.remove("hidden");
        valid = false;
      }

      if (!petNameInput.value.trim()) {
        petNameInput.classList.add("is-error", "shake-error");
        petNameError.classList.remove("hidden");
        valid = false;
        setTimeout(() => petNameInput.classList.remove("shake-error"), 400);
      } else {
        petNameInput.classList.remove("is-error");
        petNameError.classList.add("hidden");
        state.petName = petNameInput.value.trim();
      }

      state.petAge = document.getElementById("pet-age").value;
      state.reason = document.getElementById("pet-reason").value.trim();

      if (valid) {
        goToStep(2);
      }
    });
  }

  // Botón "Volver al Paso 1" (Preserva datos)
  const backToStep1Btn = document.getElementById("btn-back-to-step-1");
  if (backToStep1Btn) {
    backToStep1Btn.addEventListener("click", () => {
      goToStep(1);
    });
  }

  // Botón "Continuar al Paso 3"
  const toStep3Btn = document.getElementById("btn-to-step-3");
  if (toStep3Btn) {
    toStep3Btn.addEventListener("click", () => {
      const timeError = document.getElementById("time-error");
      if (!state.selectedDate || !state.selectedTime) {
        timeError.classList.remove("hidden");
        return;
      }
      timeError.classList.add("hidden");
      updateStep3Summary(state);
      goToStep(3);
    });
  }

  // Botón "Volver al Paso 2" (Preserva datos)
  const backToStep2Btn = document.getElementById("btn-back-to-step-2");
  if (backToStep2Btn) {
    backToStep2Btn.addEventListener("click", () => {
      goToStep(2);
    });
  }

  // Botón Final "Confirmar mi Cita"
  const confirmBookingBtn = document.getElementById("btn-confirm-booking");
  if (confirmBookingBtn) {
    confirmBookingBtn.addEventListener("click", () => {
      const ownerNameInput = document.getElementById("owner-name");
      const ownerPhoneInput = document.getElementById("owner-phone");
      const ownerEmailInput = document.getElementById("owner-email");
      
      const ownerNameError = document.getElementById("owner-name-error");
      const ownerPhoneError = document.getElementById("owner-phone-error");

      let valid = true;

      if (!ownerNameInput.value.trim()) {
        ownerNameInput.classList.add("is-error", "shake-error");
        ownerNameError.classList.remove("hidden");
        valid = false;
      } else {
        ownerNameInput.classList.remove("is-error");
        ownerNameError.classList.add("hidden");
        state.ownerName = ownerNameInput.value.trim();
      }

      const phoneDigits = ownerPhoneInput.value.replace(/\D/g, "");
      if (phoneDigits.length < 8) {
        ownerPhoneInput.classList.add("is-error", "shake-error");
        ownerPhoneError.classList.remove("hidden");
        valid = false;
      } else {
        ownerPhoneInput.classList.remove("is-error");
        ownerPhoneError.classList.add("hidden");
        state.ownerPhone = ownerPhoneInput.value.trim();
      }

      state.ownerEmail = ownerEmailInput.value.trim();

      if (valid) {
        const randomNum = Math.floor(1000 + Math.random() * 9000);
        state.bookingCode = `PAT-${randomNum}`;
        renderConfirmationVoucher(state);
        goToStep(4);
      }
    });
  }
}

/* ==========================================================================
   GESTIÓN DE PASOS DEL WIZARD (1, 2, 3 y Pantalla 4)
   ========================================================================== */
function goToStep(stepNumber) {
  for (let i = 1; i <= 4; i++) {
    const el = document.getElementById(`wizard-step-${i}`);
    if (el) el.classList.add("hidden");
  }

  const currentEl = document.getElementById(`wizard-step-${stepNumber}`);
  if (currentEl) {
    currentEl.classList.remove("hidden");
    currentEl.classList.add("step-content");
  }

  const progressBadges = document.querySelectorAll(".progress-step-badge");
  progressBadges.forEach((badge, idx) => {
    const stepIdx = idx + 1;
    if (stepIdx < stepNumber) {
      badge.classList.remove("bg-white", "text-slate-500", "border-slate-300", "dark:bg-slate-800", "dark:text-slate-400", "dark:border-slate-700");
      badge.classList.add("bg-emerald-700", "text-white", "border-emerald-700");
      badge.innerHTML = "✓";
    } else if (stepIdx === stepNumber) {
      badge.classList.remove("bg-emerald-700", "text-white", "dark:bg-slate-800");
      badge.classList.add("bg-emerald-800", "text-white", "ring-4", "ring-emerald-200", "dark:ring-emerald-800");
      badge.innerHTML = stepIdx;
    } else {
      badge.classList.remove("bg-emerald-700", "bg-emerald-800", "text-white", "ring-4", "ring-emerald-200", "dark:ring-emerald-800");
      badge.classList.add("bg-white", "text-slate-500", "border-slate-300", "dark:bg-slate-800", "dark:text-slate-400", "dark:border-slate-700");
      badge.innerHTML = stepIdx;
    }
  });

  const wizardContainer = document.getElementById("agendar-seccion");
  if (wizardContainer) {
    wizardContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* ==========================================================================
   CALENDARIO DE FECHAS Y SLOTS EN TIEMPO REAL (CON DARK MODE)
   ========================================================================== */
function setupCalendar(state) {
  const datesContainer = document.getElementById("calendar-dates");
  const slotsContainer = document.getElementById("slots-container");
  
  if (!datesContainer || !slotsContainer) return;

  const days = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  
  const today = new Date();
  let dateButtonsHTML = "";

  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const dayName = days[d.getDay()];
    const dateNum = d.getDate();
    const monthName = months[d.getMonth()];
    const isoString = d.toISOString().split("T")[0];

    const isToday = i === 0;
    const label = isToday ? "Hoy" : (i === 1 ? "Mañana" : dayName);

    dateButtonsHTML += `
      <button type="button" class="date-chip min-h-[58px] flex-1 min-w-[70px] p-2 rounded-xl border-2 text-center transition-all ${isToday ? 'border-emerald-700 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 font-bold ring-2 ring-emerald-600' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-emerald-600'}" data-date="${isoString}" data-formatted="${label} ${dateNum} de ${monthName}">
        <span class="block text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">${label}</span>
        <span class="block text-lg font-bold">${dateNum}</span>
        <span class="block text-[11px] text-slate-500 dark:text-slate-400">${monthName}</span>
      </button>
    `;
  }

  datesContainer.innerHTML = dateButtonsHTML;

  const dateChips = datesContainer.querySelectorAll(".date-chip");
  if (dateChips.length > 0) {
    const firstChip = dateChips[0];
    state.selectedDate = firstChip.getAttribute("data-formatted");
  }

  dateChips.forEach(chip => {
    chip.addEventListener("click", () => {
      dateChips.forEach(c => {
        c.classList.remove("border-emerald-700", "bg-emerald-50", "dark:bg-emerald-950/60", "text-emerald-900", "dark:text-emerald-200", "font-bold", "ring-2", "ring-emerald-600");
        c.classList.add("border-slate-200", "dark:border-slate-700", "bg-white", "dark:bg-slate-800", "text-slate-700", "dark:text-slate-200");
      });
      chip.classList.remove("border-slate-200", "dark:border-slate-700", "bg-white", "dark:bg-slate-800", "text-slate-700", "dark:text-slate-200");
      chip.classList.add("border-emerald-700", "bg-emerald-50", "dark:bg-emerald-950/60", "text-emerald-900", "dark:text-emerald-200", "font-bold", "ring-2", "ring-emerald-600");
      state.selectedDate = chip.getAttribute("data-formatted");
      renderSlots(state);
    });
  });

  renderSlots(state);
}

function renderSlots(state) {
  const morningContainer = document.getElementById("morning-slots");
  const afternoonContainer = document.getElementById("afternoon-slots");

  if (!morningContainer || !afternoonContainer) return;

  const renderSlotList = (slots) => {
    return slots.map(slot => {
      if (!slot.available) {
        return `
          <button type="button" disabled class="min-h-[48px] py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-600 font-medium text-sm cursor-not-allowed line-through opacity-60 flex items-center justify-center">
            ${slot.time}
          </button>
        `;
      }
      return `
        <button type="button" class="slot-btn min-h-[48px] py-2.5 px-3 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-emerald-700 hover:bg-emerald-50 dark:hover:bg-slate-700 active:scale-95 text-slate-800 dark:text-slate-100 font-bold text-sm transition-all flex items-center justify-center focus-visible:ring-4 focus-visible:ring-emerald-200 dark:focus-visible:ring-emerald-800" data-time="${slot.time}">
          ${slot.time}
        </button>
      `;
    }).join("");
  };

  morningContainer.innerHTML = renderSlotList(CLINIC_DATA.timeSlots.morning);
  afternoonContainer.innerHTML = renderSlotList(CLINIC_DATA.timeSlots.afternoon);

  const slotButtons = document.querySelectorAll(".slot-btn");
  slotButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      slotButtons.forEach(b => {
        b.classList.remove("bg-emerald-700", "text-white", "border-emerald-700", "ring-2", "ring-emerald-600");
        b.classList.add("bg-white", "dark:bg-slate-800", "text-slate-800", "dark:text-slate-100", "border-slate-200", "dark:border-slate-700");
      });
      btn.classList.remove("bg-white", "dark:bg-slate-800", "text-slate-800", "dark:text-slate-100", "border-slate-200", "dark:border-slate-700");
      btn.classList.add("bg-emerald-700", "text-white", "border-emerald-700", "ring-2", "ring-emerald-600");
      state.selectedTime = btn.getAttribute("data-time");
      document.getElementById("time-error").classList.add("hidden");
    });
  });
}

/* ==========================================================================
   ACTUALIZACIÓN DE RESUMEN EN PASO 3 (DARK MODE COMPATIBLE)
   ========================================================================== */
function updateStep3Summary(state) {
  const summaryBox = document.getElementById("step3-summary");
  if (!summaryBox) return;

  summaryBox.innerHTML = `
    <div class="bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4 text-sm text-slate-800 dark:text-slate-200 space-y-2">
      <div class="flex justify-between border-b border-emerald-200 dark:border-emerald-800/80 pb-2">
        <span class="text-slate-600 dark:text-slate-400">Servicio seleccionado:</span>
        <span class="font-bold text-slate-900 dark:text-white">${state.selectedService?.name || "Consulta"}</span>
      </div>
      <div class="flex justify-between border-b border-emerald-200 dark:border-emerald-800/80 pb-2">
        <span class="text-slate-600 dark:text-slate-400">Paciente:</span>
        <span class="font-semibold capitalize text-slate-900 dark:text-white">${state.petName} (${state.petSpecies})</span>
      </div>
      <div class="flex justify-between border-b border-emerald-200 dark:border-emerald-800/80 pb-2">
        <span class="text-slate-600 dark:text-slate-400">Fecha y Hora:</span>
        <span class="font-bold text-emerald-800 dark:text-emerald-400">${state.selectedDate} a las ${state.selectedTime}</span>
      </div>
      <div class="flex justify-between items-center pt-1">
        <span class="font-bold text-slate-900 dark:text-white">Total a pagar en clínica:</span>
        <span class="text-lg font-extrabold text-emerald-800 dark:text-emerald-400">${state.selectedService?.priceFormatted || "$22.000"}</span>
      </div>
    </div>
  `;
}

/* ==========================================================================
   RENDER DEL VOUCHER DE CONFIRMACIÓN (PANTALLA 4)
   ========================================================================== */
function renderConfirmationVoucher(state) {
  document.getElementById("voucher-code").innerText = state.bookingCode;
  document.getElementById("voucher-pet").innerText = `${state.petName} (${state.petSpecies})`;
  document.getElementById("voucher-service").innerText = state.selectedService.name;
  document.getElementById("voucher-datetime").innerText = `${state.selectedDate} • ${state.selectedTime}`;
  document.getElementById("voucher-owner").innerText = `${state.ownerName} (${state.ownerPhone})`;
  document.getElementById("voucher-price").innerText = state.selectedService.priceFormatted;

  const addToCalBtn = document.getElementById("btn-add-calendar");
  if (addToCalBtn) {
    addToCalBtn.onclick = () => {
      const title = encodeURIComponent(`Cita Veterinaria Patitas Felices: ${state.petName}`);
      const details = encodeURIComponent(`Cita médica para ${state.petName}. Servicio: ${state.selectedService.name}. Dirección: ${CLINIC_DATA.address}. Tel: ${CLINIC_DATA.phone}`);
      const location = encodeURIComponent(CLINIC_DATA.address);
      const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
      window.open(url, "_blank");
    };
  }

  const shareWpBtn = document.getElementById("btn-share-whatsapp");
  if (shareWpBtn) {
    shareWpBtn.onclick = () => {
      const msg = encodeURIComponent(`¡Hola! Tengo mi cita agendada en Patitas Felices para ${state.petName} el ${state.selectedDate} a las ${state.selectedTime}. Código de reserva: ${state.bookingCode}.`);
      window.open(`https://wa.me/?text=${msg}`, "_blank");
    };
  }

  const newBookingBtn = document.getElementById("btn-new-booking");
  if (newBookingBtn) {
    newBookingBtn.onclick = () => {
      location.reload();
    };
  }
}

/* ==========================================================================
   RENDER DINÁMICO DE SERVICIOS EN EL HOME (DARK MODE COMPATIBLE)
   ========================================================================== */
function renderServices(state) {
  const container = document.getElementById("home-services-grid");
  if (!container) return;

  container.innerHTML = CLINIC_DATA.services.map(s => `
    <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-md hover:border-emerald-600 dark:hover:border-emerald-500 transition-all flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="text-xs bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
            ${s.badge}
          </span>
          <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">⏱ ${s.duration}</span>
        </div>
        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">${s.name}</h3>
        <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">${s.description}</p>
      </div>
      <div class="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between gap-2">
        <div>
          <span class="text-xs text-slate-500 dark:text-slate-400 block">Tarifa fija</span>
          <span class="text-lg font-extrabold text-emerald-800 dark:text-emerald-400">${s.priceFormatted}</span>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" class="btn-detail-service text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-400 py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors" data-id="${s.id}">
            Detalles
          </button>
          <a href="#agendar-seccion" class="btn-book-direct btn-accessible bg-slate-900 hover:bg-emerald-800 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white text-xs font-bold py-2 px-3.5 rounded-xl shadow-sm" data-id="${s.id}">
            Agendar
          </a>
        </div>
      </div>
    </div>
  `).join("");

  // Manejador para botón "Detalles"
  const detailButtons = document.querySelectorAll(".btn-detail-service");
  detailButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const sId = btn.getAttribute("data-id");
      openServiceDetailModal(sId, state);
    });
  });

  // Manejador para botón "Agendar" directo desde la card
  const bookDirectButtons = document.querySelectorAll(".btn-book-direct");
  bookDirectButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const sId = btn.getAttribute("data-id");
      const targetCard = document.querySelector(`.service-select-card[data-id="${sId}"]`);
      if (targetCard) targetCard.click();
    });
  });
}

/* ==========================================================================
   PANTALLA 3: DETALLE DE UN SERVICIO (MODAL INTERACTIVO ACCESIBLE)
   ========================================================================== */
function initServiceDetailModal(state) {
  const modal = document.getElementById("service-detail-modal");
  const closeBtn = document.getElementById("close-service-modal-btn");
  const bookFromModalBtn = document.getElementById("book-from-modal-btn");

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
      document.body.style.overflow = "auto";
    });
  }

  if (bookFromModalBtn && modal) {
    bookFromModalBtn.addEventListener("click", () => {
      const sId = bookFromModalBtn.getAttribute("data-id");
      modal.classList.add("hidden");
      document.body.style.overflow = "auto";
      const targetCard = document.querySelector(`.service-select-card[data-id="${sId}"]`);
      if (targetCard) targetCard.click();
      const agendarSec = document.getElementById("agendar-seccion");
      if (agendarSec) agendarSec.scrollIntoView({ behavior: "smooth" });
    });
  }
}

function openServiceDetailModal(serviceId, state) {
  const modal = document.getElementById("service-detail-modal");
  if (!modal) return;

  const service = CLINIC_DATA.services.find(s => s.id === serviceId);
  if (!service) return;

  document.getElementById("detail-modal-name").innerText = service.name;
  document.getElementById("detail-modal-badge").innerText = service.badge;
  document.getElementById("detail-modal-duration").innerText = `⏱ ${service.duration} de atención médica`;
  document.getElementById("detail-modal-price").innerText = service.priceFormatted;
  document.getElementById("detail-modal-desc").innerText = service.description;
  document.getElementById("detail-modal-doctor").innerText = service.doctor || "Médico Veterinario Colegiado";
  document.getElementById("detail-modal-prep").innerText = service.preparation || "Traer a la mascota con correa o en transportadora.";

  const includesList = document.getElementById("detail-modal-includes");
  if (includesList && service.includes) {
    includesList.innerHTML = service.includes.map(item => `
      <li class="flex items-start gap-2">
        <span class="text-emerald-700 dark:text-emerald-400 font-bold">✓</span>
        <span>${item}</span>
      </li>
    `).join("");
  }

  const bookBtn = document.getElementById("book-from-modal-btn");
  if (bookBtn) {
    bookBtn.setAttribute("data-id", service.id);
  }

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

/* ==========================================================================
   PUNTO EXTRA: SECCIÓN «MIS MASCOTAS» (HISTORIAL DE VACUNAS Y CONTROLES)
   ========================================================================== */
function initMyPetsModal() {
  const modal = document.getElementById("mis-mascotas-modal");
  const openBtns = document.querySelectorAll(".open-my-pets-btn");
  const closeBtn = document.getElementById("close-my-pets-btn");

  openBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (modal) {
        modal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
      }
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
      document.body.style.overflow = "auto";
    });
  }
}

/* ==========================================================================
   RENDER DINÁMICO DEL EQUIPO (DARK MODE COMPATIBLE)
   ========================================================================== */
function renderTeam() {
  const container = document.getElementById("team-grid");
  if (!container) return;

  container.innerHTML = CLINIC_DATA.team.map(doc => `
    <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md transition-all">
      <img src="${doc.avatar}" alt="${doc.name}" class="w-full h-56 object-cover object-top" loading="lazy">
      <div class="p-6">
        <span class="text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider block mb-1">${doc.reg} • ${doc.exp}</span>
        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-1">${doc.name}</h3>
        <p class="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-3">${doc.role}</p>
        <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">${doc.bio}</p>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   RENDER DINÁMICO DE TESTIMONIOS (DARK MODE COMPATIBLE)
   ========================================================================== */
function renderTestimonials() {
  const container = document.getElementById("testimonials-grid");
  if (!container) return;

  container.innerHTML = CLINIC_DATA.testimonials.map(t => `
    <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-1 text-amber-500 mb-3">
          ${"★".repeat(t.rating)}
          <span class="text-xs font-bold text-slate-500 dark:text-slate-400 ml-2">5.0 en Google</span>
        </div>
        <p class="text-slate-700 dark:text-slate-200 text-sm leading-relaxed italic mb-4">"${t.comment}"</p>
      </div>
      <div class="border-t border-slate-100 dark:border-slate-700 pt-3 flex items-center justify-between">
        <div>
          <h4 class="font-bold text-slate-900 dark:text-white text-sm">${t.author}</h4>
          <span class="text-xs text-slate-500 dark:text-slate-400">${t.pet}</span>
        </div>
        <span class="text-[11px] text-slate-400">${t.date}</span>
      </div>
    </div>
  `).join("");
}
