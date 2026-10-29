/**
 * PATITAS FELICES — BASE DE DATOS Y CATÁLOGO DE SERVICIOS
 * Precios transparentes y datos referenciales para el agendamiento express (< 2 min)
 */

const CLINIC_DATA = {
  name: "Patitas Felices",
  slogan: "Cuidado médico veterinario con amor, transparencia y 8 años de confianza en tu barrio.",
  phone: "+56 2 2345 6789",
  whatsapp: "+56 9 8765 4321",
  address: "Av. Los Leones 1420, Providencia, Santiago",
  hours: "Lunes a Sábado: 08:30 a 20:00 hrs | Urgencias: 24/7",
  
  services: [
    {
      id: "consulta-general",
      name: "Consulta Médica General",
      description: "Evaluación clínica integral, revisión preventiva, chequeo de peso, oídos, dientes y signos vitales.",
      price: 22000,
      priceFormatted: "$22.000",
      duration: "30 min",
      icon: "stethoscope",
      badge: "Más Solicitado",
      species: ["perro", "gato", "exotico"],
      includes: [
        "Examen clínico cefalocaudal completo",
        "Control de peso y condición corporal",
        "Revisión de oídos, ojos, piel y dentadura",
        "Auscultación cardiopulmonar y temperatura",
        "Receta médica digital enviada por WhatsApp"
      ],
      preparation: "Traer a la mascota con correa o en transportadora segura. Traer carnet de vacunas previo si es primera vez.",
      doctor: "Dr. Ricardo Morales / Dra. Valeria Muñoz"
    },
    {
      id: "medicina-felina",
      name: "Consulta Felina Cat-Friendly",
      description: "Protocolo especial libre de ruidos y estrés para gatos. Sala exclusiva con feromonas y manejo amable.",
      price: 26000,
      priceFormatted: "$26.000",
      duration: "40 min",
      icon: "cat",
      badge: "Certificado Cat-Friendly",
      species: ["gato"],
      includes: [
        "Consulta en sala aislada acústicamente sin olores caninos",
        "Difusión ambiental previa de feromonas Feliway",
        "Toallas tibias y manejo respetuoso sin sujeción forzada",
        "Evaluación de estrés, hidratación y chequeo renal preventivo",
        "Guía personalizada de enriquecimiento ambiental en casa"
      ],
      preparation: "Transportadora tapada con una manta o toalla para reducir la estimulación visual durante el trayecto.",
      doctor: "Dra. Camila Soto (Especialista en Medicina Felina)"
    },
    {
      id: "vacunacion",
      name: "Vacunación y Desparasitación",
      description: "Vacuna séxtuple, antirrábica, triple felina o leucemia, con desparasitación interna y certificación oficial.",
      price: 18000,
      priceFormatted: "$18.000",
      duration: "20 min",
      icon: "syringe",
      badge: "Preventivo",
      species: ["perro", "gato"],
      includes: [
        "Revisión previa de temperatura para asegurar estado inmune óptimo",
        "Aplicación de vacuna autorizada por el SAG",
        "Entrega de desparasitante interno en dosis exacta",
        "Actualización y timbrado del carnet sanitario oficial",
        "Registro automático en el sistema para recordatorios futuros"
      ],
      preparation: "La mascota debe estar sana, sin vómitos ni diarreas en las 48 horas previas.",
      doctor: "Dra. Valeria Muñoz"
    },
    {
      id: "peluqueria",
      name: "Peluquería Canina y Spa",
      description: "Baño medicado o de belleza, corte de raza, corte de uñas, limpieza de oídos y glándulas anales.",
      price: 25000,
      priceFormatted: "$25.000",
      duration: "60 min",
      icon: "scissors",
      badge: "Higiene y Confort",
      species: ["perro"],
      includes: [
        "Baño con champú hipoalergénico dermatológico y acondicionador",
        "Secado silencioso con control de temperatura",
        "Corte estético según estándar de la raza o requerimiento del tutor",
        "Corte y limado de uñas, más limpieza ótica profesional",
        "Vaciado preventivo de glándulas anales por especialista"
      ],
      preparation: "Pasear al perro 15 minutos antes para que haga sus necesidades antes de entrar a la tina.",
      doctor: "Equipo Técnico de Estética & Bienestar Animal"
    },
    {
      id: "cirugia-menor",
      name: "Cirugía y Esterilización",
      description: "Quirófano con monitoreo multiparámetro, anestesia inhalatoria y recuperación asistida.",
      price: 45000,
      priceFormatted: "Desde $45.000",
      duration: "60 min",
      icon: "heart-pulse",
      badge: "Monitoreo 100%",
      species: ["perro", "gato"],
      includes: [
        "Evaluación preanestésica inmediata en quirófano",
        "Anestesia inhalatoria Isoflurano con monitor multiparámetro",
        "Suturas intradérmicas absorbibles (sin necesidad de retirar puntos)",
        "Terapia analgésica preventiva y antibiótica",
        "Monitoreo post-quirúrgico en sala de recuperación climatizada"
      ],
      preparation: "Ayuno estricto de 8 horas de sólidos y 4 horas de líquidos. Traer exámenes de sangre prequirúrgicos.",
      doctor: "Dr. Ricardo Morales (Cirujano Principal)"
    }
  ],

  team: [
    {
      name: "Dr. Ricardo Morales",
      role: "Director Médico & Cirugía Menor",
      reg: "Colmevet 4589",
      exp: "12 años de experiencia",
      bio: "Especialista en medicina preventiva y geriatría animal. Atiende con paciencia infinita a los pacientes senior.",
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dra. Camila Soto",
      role: "Especialista en Medicina Felina (Cat-Friendly)",
      reg: "Colmevet 6120",
      exp: "7 años de experiencia",
      bio: "Certificada en manejo de bajo estrés para felinos y medicina interna. Amante incondicional de los gatos.",
      avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dra. Valeria Muñoz",
      role: "Medicina General y Vacunatorio",
      reg: "Colmevet 7401",
      exp: "5 años de experiencia",
      bio: "Dedicada al seguimiento de cachorros y planes de inmunización completos con empatía hacia las familias.",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80"
    }
  ],

  testimonials: [
    {
      author: "Valentina Ramos",
      pet: "Tutora de Milo (gato de 1 año)",
      date: "Hace 2 semanas en Google Maps",
      rating: 5,
      comment: "¡Increíble la web! Agendé un domingo por la noche en 1 minuto y el lunes a primera hora atendieron a Milo. La Dra. Camila fue un amor con él y no lo estresó en nada. Los precios estaban clarísimos desde el principio."
    },
    {
      author: "Carlos Méndez",
      pet: "Tutor de Simón (Labrador de 11 años)",
      date: "Hace 1 mes en Google Maps",
      rating: 5,
      comment: "Vengo a Patitas Felices desde que abrieron hace 8 años. Con mi edad a veces me cuesta la tecnología, pero me mandaron la confirmación por WhatsApp y me explicaron todo. El Dr. Morales es el mejor médico de barrio."
    },
    {
      author: "Mariana González",
      pet: "Tutora de Coco (Poodle de 3 años)",
      date: "Hace 3 días en Google Maps",
      rating: 5,
      comment: "Pude agendar la vacuna y peluquería en un solo trámite para el sábado por la mañana. Cero esperas, llegamos y nos atendieron puntual. Ideal para quienes vivimos con el tiempo contado."
    }
  ],

  // Generador de slots disponibles por franja horaria
  timeSlots: {
    morning: [
      { time: "09:00 AM", available: true },
      { time: "09:30 AM", available: true },
      { time: "10:00 AM", available: false }, // Ocupado
      { time: "10:30 AM", available: true },
      { time: "11:00 AM", available: true },
      { time: "11:30 AM", available: true },
      { time: "12:00 PM", available: false }  // Ocupado
    ],
    afternoon: [
      { time: "14:30 PM", available: true },
      { time: "15:00 PM", available: true },
      { time: "15:30 PM", available: false }, // Ocupado
      { time: "16:00 PM", available: true },
      { time: "16:30 PM", available: true },
      { time: "17:00 PM", available: true },
      { time: "17:30 PM", available: true },
      { time: "18:30 PM", available: true }
    ]
  }
};
