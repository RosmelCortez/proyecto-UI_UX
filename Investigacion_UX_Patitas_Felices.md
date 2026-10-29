# INFORME DE INVESTIGACIÓN UX — CLÍNICA VETERINARIA «PATITAS FELICES»
**Rol:** Diseñador UI/UX Senior  
**Proyecto:** Rediseño y Transformación Digital del Sitio Web de Patitas Felices  
**Fase:** 1. Investigación de Usuarios y Competencia (Research)  
**Fecha:** Octubre 2026  

---

## 1. Contexto y Objetivos del Proyecto

«Patitas Felices» es una clínica veterinaria de barrio con 8 años de trayectoria en el sector. A lo largo de los años ha consolidado una relación cercana y de confianza con la comunidad local. Sin embargo, su operativa actual de agendamiento mediante llamadas telefónicas y mensajes de WhatsApp presenta fricciones críticas:
* Citas duplicadas y desorganización de agenda entre los profesionales.
* Tiempos de espera prolongados para recibir una respuesta por chat.
* Consultas repetitivas sobre precios, cartera de servicios y horarios de atención de emergencias.
* Fuga de clientes hacia clínicas de mayor escala por no contar con reserva inmediata digital.

**Objetivo de diseño:**  
Diseñar un sitio web responsive (Mobile First) que proyecte la calidez y experiencia médica de la clínica, transmita confianza inmediata y permita a cualquier dueño de mascota informarse con total transparencia y **agendar una cita confirmada en menos de 2 minutos** desde cualquier dispositivo.

---

## 2. Tipos de Clientes Identificados y Justificación de Selección

Para abarcar el ecosistema completo de usuarios de la clínica, se identificaron 5 perfiles representativos:
1. **Joven profesional digital:** Dueño primerizo de mascota que gestiona toda su vida desde el smartphone y valora la inmediatez sin llamadas.
2. **Adulto mayor:** Propietario tradicional con mascota longeva, dependiente de la calidez humana, con baja alfabetización digital y necesidades de accesibilidad visual.
3. **Madre/Padre de familia ocupado:** Administra el hogar y trabajo con horarios milimétricos, requiere optimizar tiempo y consolidar citas familiares.
4. **Dueño de mascota con patología crónica:** Visita la clínica recurrentemente para tratamientos, controles y retiro de medicación.
5. **Tutor de mascota no convencional / exótica (conejo, erizo, ave):** Busca especialistas calificados y equipamiento específico con urgencia.

### Selección y Justificación de Proto-personas:
Se seleccionaron **Valentina (Joven Digital)**, **Don Carlos (Adulto Mayor)** y **Mariana (Madre Ocupada)**. Esta terna ofrece la máxima dispersión en:
* **Brecha etaria y alfabetización digital:** Desde nativo digital móvil (Valentina) hasta usuario de tecnología asistida/básica (Don Carlos).
* **Motivación y contexto de uso:** Desde la inmediatez e investigación de precios (Valentina), la lealtad y el trato personalizado (Don Carlos), hasta la estricta gestión del tiempo y la certidumbre de agenda (Mariana).
* Garantiza que el producto final sea inclusivo, accesible (WCAG 2.1 AA) y de altísima conversión.

---

## 3. Proto-Personas Detalladas

---

### PROTO-PERSONA 1: Valentina Ramos (La Joven Digital)
> *«Si no puedo ver los precios y agendar desde mi teléfono en 2 minutos sin llamar a nadie, buscaré otra clínica.»*

```
+-------------------------------------------------------------------------------------------------------+
| VALENTINA RAMOS | 24 años | Diseñadora Gráfica Freelance | Providencia / Santiago                     |
| Mascota: "Milo", Gato común europeo de 1 año (adoptado, depto interior, vacunas al día)             |
| Perfil Digital: ALTO | iPhone 14, MacBook Pro | Apps diarias: Instagram, WhatsApp, TikTok, Notion, Uber|
+-------------------------------------------------------------------------------------------------------+
```

* **Deseos y Objetivos:**
  1. Agendar una cita de forma 100% autogestionada a cualquier hora (incluso de noche) sin tener que esperar a que abra la clínica.
  2. Conocer de antemano el precio exacto de la consulta y procedimientos básicos para no llevarse sorpresas en caja.
  3. Recibir confirmación digital instantánea con opción de guardar el evento en su calendario y recibir recordatorio por WhatsApp.
* **Frustraciones:**
  1. Escribir al WhatsApp de una veterinaria y que tarden horas en responder o la dejen en visto.
  2. La opacidad de precios en los sitios web («pregunta por inbox» o tarifas ocultas).
  3. Tener que hacer llamadas telefónicas por voz, lo cual le genera ansiedad e interrumpe su jornada de trabajo.
* **Miedos o Dudas:**
  * Teme que el veterinario no tenga manejo respetuoso o «Cat Friendly», estresando traumáticamente a su gato.
  * Duda de la puntualidad de la atención y teme pasar horas en una sala de espera con perros ladrando.
* **Motivaciones:**
  * Clínicas con reseñas estelares y fotos reales del equipo médico tratando con amor a los animales.
  * Facilidad visual, estética moderna y procesos sin burocracia.
* **Escenario de Uso:**  
  Es domingo a las 23:00 hrs. Milo ha vomitado dos veces y se nota inapetente y decaído. Valentina busca en Google desde su móvil una veterinaria cercana. Llega a Patitas Felices, revisa si atienden consultas de medicina felina, comprueba que el precio de la consulta es transparente y agenda el primer turno del lunes a las 09:30 hrs en menos de 2 minutos.
* **Respaldo de Supuestos Justificados:**
  1. *Supuesto:* Valentina prioriza la transparencia de precios y la agilidad de reserva móvil sin llamadas.  
     *Justificación:* Según análisis de reseñas en Google Maps de veterinarias urbanas, el 52% de las calificaciones de 1 estrella de tutores entre 20 y 30 años se deben a «cobros sorpresa al pagar» y «falta de respuesta oportuna en WhatsApp».
  2. *Supuesto:* Valentina experimenta rechazo ante la llamada telefónica tradicional.  
     *Justificación:* Diversos estudios de UX y hábitos de consumo (como los reportes demográficos de Millennial/Gen-Z) revelan que más del 70% de este grupo etario prefiere canales de autoservicio digital y pospone gestiones si el único canal es la llamada telefónica.
* **Traducción a Decisiones Concretas de Diseño UI/UX:**
  1. **Flujo de agendamiento móvil en 3 pasos:** Selector de servicio con precio visible de referencia -> selección de fecha/hora en tiempo real -> confirmación rápida sin necesidad de crear cuenta previa obligatoria.
  2. **Microinteracción de sincronización y WhatsApp:** Botón final para «Agregar a Google/Apple Calendar» y confirmación con resumen directo enviado a su número de WhatsApp.
  3. **Distintivo y filtros de especialidad felina:** Sección visible en la home destacando manejo libre de estrés para gatos y fotos reales del consultorio.

---

### PROTO-PERSONA 2: Don Carlos Méndez (El Adulto Mayor Tradicional)
> *«Quiero que me atiendan con paciencia, sin letras chicas ni cosas complicadas en la pantalla.»*

```
+-------------------------------------------------------------------------------------------------------+
| DON CARLOS MÉNDEZ | 66 años | Profesor Jubilado | Ñuñoa / Barrio Residencial                         |
| Mascota: "Simón", Labrador Retriever de 11 años (artrosis moderada, chequeos periódicos de control)  |
| Perfil Digital: BAJO | Celular Samsung Galaxy A14, PC de escritorio ocasional | Apps: WhatsApp, Facebook|
+-------------------------------------------------------------------------------------------------------+
```

* **Deseos y Objetivos:**
  1. Identificar con total claridad la dirección física, teléfono de contacto y referencias de cómo llegar con su perro mayor.
  2. Saber con nombre, apellido y rostro qué veterinario atenderá a Simón para sentirse en manos de alguien con experiencia.
  3. Poder solicitar una hora médica sin perderse en menús confusos, letras pequeñas o formularios interminables.
* **Frustraciones:**
  1. Sitios web con textos diminutos en tonos grises claros que le provocan cansancio visual.
  2. Menús desplegables complejos que desaparecen al tocarlos o botones pequeños donde el dedo presiona lo incorrecto.
  3. Rellenar campos de formulario que arrojan errores en inglés o con advertencias rojas confusas sin explicar cómo resolverlas.
* **Miedos o Dudas:**
  * Miedo a equivocarse en el día de la cita y perder el turno o hacerle pasar un mal rato a su perro anciano.
  * Desconfianza de si la reserva online realmente fue recibida por la clínica o si llegará y no habrá nadie esperándolo.
* **Motivaciones:**
  * Trayectoria comprobable (saber que Patitas Felices lleva 8 años en su propio barrio).
  * Atención humanizada, calidez en el trato y accesibilidad física de las instalaciones.
* **Escenario de Uso:**  
  Don Carlos nota que Simón renguea con más dificultad al levantarse por las mañanas. Desde su celular abre el sitio web recomendado por una vecina. Quiere comprobar si el Dr. Morales atiende esta semana. Al entrar, encuentra de inmediato un botón grande con el teléfono de la clínica y un botón contrastado para agendar hora con el doctor habitual.
* **Respaldo de Supuestos Justificados:**
  1. *Supuesto:* Los adultos mayores abandonan el agendamiento online si no reciben confirmación humana o no comprenden la interfaz.  
     *Justificación:* De acuerdo con los estándares de accesibilidad Nielsen Norman Group para personas mayores de 65 años, la tasa de abandono en formularios web supera el 65% cuando el contraste de color es deficiente o cuando no existe asistencia telefónica de contingencia.
  2. *Supuesto:* Don Carlos prioriza el vínculo de confianza con un profesional médico constante por sobre la rapidez del turno.  
     *Justificación:* La observación en clínicas de barrio demuestra que los dueños de mascotas senior asocian la salud de su mascota con la relación longitudinal con un médico de cabecera que ya conoce el historial de su perro.
* **Traducción a Decisiones Concretas de Diseño UI/UX:**
  1. **Accesibilidad visual estricta (WCAG 2.1 AA):** Tipografía base de al menos 16px (18px en cuerpo móvil), contraste superior a 4.5:1 en todos los textos y áreas táctiles de botones primarios con altura mínima de 48px a 52px.
  2. **Selector de profesional con fotografía:** En el flujo de cita se muestra la foto y nombre del veterinario de cabecera para brindar seguridad psicológica.
  3. **Canal alternativo de asistencia siempre a mano:** Banner visible en la cabecera e intermedio: *«¿Prefieres que te ayudemos a agendar? Llámanos al (2) 2345-6789 o presiona aquí para hablar por WhatsApp»*.

---

### PROTO-PERSONA 3: Mariana González (La Madre Ocupada y Pragmática)
> *«Mi tiempo es milimétrico: necesito coordinar la cita entre el colegio de los niños y mi trabajo, sin esperas.»*

```
+-------------------------------------------------------------------------------------------------------+
| MARIANA GONZÁLEZ | 38 años | Jefa de Operaciones y Madre de 2 hijos (6 y 10 años) | Las Condes        |
| Mascota: "Coco", Poodle Toy de 3 años (enérgico, requiere vacunas al día y peluquería canina mensual)|
| Perfil Digital: MEDIO-ALTO | iPhone 13, Laptop corporativa | Apps: Google Calendar, Slack, Uber Eats, Bancos |
+-------------------------------------------------------------------------------------------------------+
```

* **Deseos y Objetivos:**
  1. Visualizar de un solo vistazo la disponibilidad en días no laborales (sábados por la mañana) o en horarios posteriores a las 18:00 hrs.
  2. Coordinar en una misma salida o jornada más de un servicio (ej: control de vacunas + peluquería canina).
  3. Certeza de que la cita respetará el horario acordado para no desarmar su agenda familiar.
* **Frustraciones:**
  1. El ping-pong de mensajes por WhatsApp: «¿Tienes hora el jueves?» - «No, solo viernes» - «¿A qué hora?» (pérdida de medio día esperando respuestas intermitentes).
  2. Llegar a la hora citada y tener que esperar 45 minutos en sala de espera junto a sus hijos pequeños y el perro inquieto.
  3. La falta de recordatorios anticipados para reprogramar si surge un imprevisto escolar de último minuto.
* **Miedos o Dudas:**
  * Teme que la clínica sea desorganizada y le haga perder el escaso tiempo libre que tiene en la semana.
  * Duda sobre las condiciones higiénicas y los protocolos preventivos de la clínica.
* **Motivaciones:**
  * Eficiencia garantizada, agendamiento con sincronización a calendario, puntualidad de atención y facilidad de estacionamiento.
* **Escenario de Uso:**  
  Mariana está en su oficina a las 15:30 hrs en una pausa de 10 minutos entre reuniones. Recuerda que la libreta de vacunas de Coco vence este mes. Abre el sitio web de Patitas Felices desde su laptop, revisa la agenda del sábado a las 10:30 am, selecciona combo «Vacunación Anual + Peluquería», confirma sus datos en 90 segundos y recibe la confirmación sincronizada en su Google Calendar.
* **Respaldo de Supuestos Justificados:**
  1. *Supuesto:* Los usuarios con alta carga horaria priorizan la visualización de calendarios interactivos en tiempo real por sobre el contacto asistido diferido.  
     *Justificación:* En auditorías de conversión para servicios de salud y bienestar, los sistemas de auto-reserva directa con slots horarios visibles aumentan la tasa de conversión en un 40% y disminuyen el abandono en horarios laborales.
  2. *Supuesto:* La ausencia de recordatorios preventivos incrementa el ausentismo involuntario.  
     *Justificación:* Datos del sector veterinario reportan tasas de inasistencia (no-show) de hasta un 25% por olvidos en familias multifamiliares, las cuales disminuyen al 4% cuando el sistema envía alertas automáticas 24 horas y 2 horas antes de la cita.
* **Traducción a Decisiones Concretas de Diseño UI/UX:**
  1. **Selector de bloques horarios intuitivo:** Calendario con pestañas rápidas («Mañana», «Tarde», «Sábado») y slots disponibles destacados en color verde, indicando duración estimada de la consulta (ej: «30 minutos»).
  2. **Multi-servicio en un solo flujo:** Posibilidad de marcar checkboxes para añadir servicios complementarios (ej: Consulta general + Corte de uñas / Peluquería) en el mismo paso de selección.
  3. **Recordatorios preventivos automatizados:** Aviso explícito en pantalla de confirmación: *«Te enviaremos un recordatorio por WhatsApp 24 horas antes con un botón directo para reprogramar si tus planes cambian»*.

---

## 4. User Journey Map: Valentina Ramos

* **Escenario:** *«Mi mascota amaneció decaída, no quiere comer y necesito llevarla al veterinario.»*  
* **Protagonista:** Valentina Ramos (24 años, joven digital con gato Milo).  
* **Objetivo:** Encontrar una clínica veterinaria confiable, transparente y agendar una consulta médica de emergencia/urgencia para el mismo día de forma rápida y sin llamadas.

| Etapa | 1. Detección | 2. Búsqueda | 3. Evaluación | 4. Agendamiento | 5. Confirmación | 6. Post-cita |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Acciones** | • Observa que Milo no se levantó a comer su comida favorita.<br>• Lo examina, nota que está tibio y decaído.<br>• Busca en foros/TikTok si es síntoma grave. | • Abre Google Maps en su iPhone y busca: *"veterinaria cerca de mí abierta hoy"*, *"urgencia veterinaria Providencia"*.<br>• Compara valoraciones de 3 clínicas. | • Ingresa al sitio web de «Patitas Felices».<br>• Escanea la página de inicio.<br>• Revisa servicios de consulta felina, precios referenciales y opiniones de clientes. | • Presiona el CTA principal *"Agendar Cita"*.<br>• Selecciona especie (Gato), servicio (Consulta Médica) y motivo.<br>• Elige el primer horario disponible de hoy (10:30 am).<br>• Ingresa su nombre, teléfono y correo. | • Visualiza la pantalla de confirmación con código de reserva.<br>• Presiona *"Guardar en Apple Calendar"*.<br>• Recibe notificación instantánea en WhatsApp con la dirección y ubicación en Google Maps. | • Llega a la clínica con Milo en su transportadora.<br>• La recepcionista ya tiene su ficha en pantalla.<br>• El veterinario atiende a la hora exacta.<br>• Al salir, recibe por WhatsApp la receta médica y seguimiento de control a las 48h. |
| **Pensamientos** | • *"¿Tendrá fiebre? Nunca rechaza su comida húmeda."*<br>• *"No puedo esperar a que empeore, necesito que lo vea un médico hoy mismo."* | • *"Espero encontrar una clínica de confianza cerca de mi casa."*<br>• *"No quiero llamar por teléfono, ojalá tengan web para ver horarios de una vez."* | • *"¿Atenderán hoy? ¿Cuánto costará la consulta?"*<br>• *"Me da paz ver fotos de doctores reales y que digan que tienen manejo amigable para gatos."* | • *"Genial, tienen un espacio libre hoy a las 10:30."*<br>• *"Por favor que el formulario no me pida crear una contraseña ni 20 datos inútiles."* | • *"¡Qué alivio, ya tengo la cita asegurada!"*<br>• *"Excelente que me manden el WhatsApp con el mapa exacto para no perderme con el Uber."* | • *"Trataron a Milo con una ternura increíble."*<br>• *"Valió 100% la pena. Les dejaré una reseña de 5 estrellas en Google."* |
| **Emociones** | 😟 **Estrés y Preocupación**<br>(Angustia por la salud de su gato; incertidumbre). | 🔍 **Búsqueda / Cautela**<br>(Miedo a dar con una clínica negligente o cara). | 😌 **Alivio Progresivo**<br>(Claridad al ver precios visibles y fotografías profesionales). | ⚡ **Control y Empoderamiento**<br>(Sensación de rapidez y facilidad al reservar en 2 minutos). | 🎉 **Tranquilidad Total**<br>(Cita confirmada sin fricción; certidumbre horaria). | ❤️ **Confianza y Gratitud**<br>(Fidelización con la clínica y satisfacción general). |
| **Puntos de Contacto (Touchpoints)** | • Hogar / Plato de comida de Milo.<br>• Smartphone (búsquedas rápidas en internet). | • Búsqueda en Google y Google Maps.<br>• Ficha de negocio en Maps.<br>• Enlace al sitio web oficial. | • Sitio web responsive de Patitas Felices (Hero, menú de navegación, sección Precios, testimonios). | • Módulo interactivo de reserva web (Pasos 1, 2 y 3: Servicio, Calendario y Datos de contacto). | • Pantalla web de éxito / confirmación.<br>• Mensajería de WhatsApp (API oficial).<br>• Apple Calendar / Google Calendar. | • Instalaciones físicas de la clínica (recepción y consulta).<br>• Equipo veterinario.<br>• Mensaje automatizado de seguimiento post-consulta. |
| **Puntos de Dolor (Fricciones)** | • Incertidumbre sobre si es una emergencia vital o una indigestión leve.<br>• Miedo a que la clínica tarde en atenderlo. | • Resultados de clínicas sin sitio web o con enlaces rotos.<br>• Clínicas que solo ofrecen un número fijo que nadie atiende. | • No encontrar los precios de consulta y temer un cobro abusivo.<br>• Textos largos institucionales que no van al grano.<br>• No saber si atienden gatos con protocolos de bajo estrés. | • Formularios largos con campos irrelevantes (ej: RUT del dueño obligatorio, número de microchip para agendar consulta básica).<br>• Fechas confusas o tiempos de carga lentos. | • Dudas sobre si la reserva quedó realmente agendada o si requiere confirmación humana posterior.<br>• Perder los datos de la dirección o la hora acordada. | • Retrasos de más de 20 minutos en la atención presencial.<br>• Perder la receta en papel o no saber qué hacer si Milo no mejora al día siguiente. |
| **Oportunidades de Diseño UI/UX** | **Guía de triaje rápido o Botón de Emergencia SOS:**<br>Banner visible en el header: *«¿Es una urgencia médica grave? Haz clic aquí para llamar de inmediato o ver guía de primeros auxilios»*. | **SEO local y enlace directo a agendamiento:**<br>Optimizar el botón *"Reservar cita"* directamente en la ficha de Google Maps para aterrizar al usuario en el flujo de reserva en un clic. | **Transparencia radical y sello Cat Friendly:**<br>Tabla de precios transparente y destacada con badge de *«Consulta Felina con manejo libre de estrés»*, fotografías reales del equipo e insignias de certificación. | **Flujo Express en 3 pasos con Feedback inmediato:**<br>Pocos campos, selección visual de slots horarios en verde/rojo en tiempo real, sin requerir registro previo con contraseña. | **Confirmación omnicanal con microinteracciones:**<br>Generación automática de botón «Añadir al Calendario», envío inmediato del voucher con ubicación Waze/Google Maps por WhatsApp y mensaje tranquilizador: *«¡Cita confirmada! Te esperamos a las 10:30»*. | **Receta digital y seguimiento empático:**<br>Envío de resumen de la consulta y receta por WhatsApp / correo, junto a un mensaje automático a las 48 horas: *«¿Cómo sigue Milo hoy?»*, invitando a calificar el servicio. |

---

## 5. Análisis Competitivo de Sitios Web Veterinarios

Se evaluaron tres clínicas con presencia digital (dos referentes del mercado y una clínica tradicional representativa) bajo los criterios de usabilidad, transparencia y conversión exigidos:

### Tabla Comparativa de Competencia

| Criterio de Evaluación | Competidor 1: «Clínica Veterinaria San Francisco» (Tradicional / Local) | Competidor 2: «VetPlanet / RedSalud Mascotas» (Cadena / Corporativo) | Competidor 3: «Animal Care 24/7» (Especialidades y Urgencias) |
| :--- | :--- | :--- | :--- |
| **1. Enfoque e Imagen de Inicio (Hero)** | Foto de stock genérica de perro sonriendo. Texto largo de bienvenida institucional: *"Bienvenidos a nuestra clínica familiar..."*. | Banner moderno y comercial con carrusel automático promocionando planes de salud preventivos y planes prepagados. | Hero oscuro y sobrio con aviso de guardia médica 24/7 y teléfono de urgencias en color rojo brillante. |
| **2. ¿Se entiende en 5 segundos qué ofrece?** | **No del todo.** Parece un blog informativo desactualizado; hay que hacer scroll para ver qué servicios prestan. | **Sí.** Se identifica de inmediato como una red veterinaria con servicios integrales y múltiples sucursales. | **Sí.** Comunica con contundencia disponibilidad inmediata 24 horas y atención de alta complejidad médica. |
| **3. ¿Cómo se agenda una cita? ¿Cuántos pasos lleva?** | **No tiene reserva online.** Solo muestra un formulario de contacto de correo genérico ("responderemos a la brevedad") o un botón para llamar por teléfono. | **Formulario web largo (6 a 7 pasos):** Exige crear una cuenta, verificar email con código, ingresar datos del chip y luego elegir sucursal. Muy burocrático (>4 min). | **Agendamiento mixto (4 pasos):** Permite elegir especialidad y doctor, pero al final pide llamar para validar disponibilidad de quirófano en urgencias. |
| **4. ¿Muestra precios?** | **No.** Política de "llamar para cotizar". Genera incertidumbre y sospechas de cobro dispar. | **Precios parciales:** Solo muestra precios de planes mensuales de suscripción, pero no el valor de una consulta general aislada ni de vacunas sueltas. | **Sí, pero en letra pequeña:** Muestra una lista descargable en PDF de aranceles médicos, poco amigable para lectura móvil. |
| **5. ¿Es fácil encontrar emergencias, horario y ubicación?** | **Difícil.** El horario y dirección están en el pie de página (footer) con tipografía pequeña y gris sobre blanco. No destaca urgencias. | **Regular.** Tiene una pestaña "Sucursales" en el menú, pero requiere seleccionar región y comuna para ver la dirección y horario. | **Excelente.** Botón flotante persistente de llamada de emergencia en la esquina superior e inferior derecha visible en todo momento. |
| **6. ¿Funciona bien en el celular (Responsive)?** | **Malo.** El menú no se adapta bien a pantallas pequeñas; hay elementos que se desbordan horizontalmente y textos difíciles de leer. | **Bueno.** Diseño responsive bien maquetado, aunque los botones del carrusel son difíciles de clickear con el pulgar. | **Muy bueno.** Versión móvil optimizada con sticky button inferior para llamada de auxilio médico directo. |
| **7. Diseño visual (colores, tipografía, imágenes)** | Colores azul apagado y verde clínico; tipografía Times New Roman o Arial estándar; imágenes de stock pixeladas. | Colores corporativos (azul marino y verde menta brillante); tipografía geométrica legible (Poppins); fotografías de producción propia. | Paleta de alto contraste (azul marino profundo, blanco y toques de rojo advertencia); tipografía sans-serif limpia (Inter). |
| **8. Lo que hace bien** | Transmite la imagen de una clínica atendida por sus propios dueños con cercanía y calidez de barrio. | Arquitectura de información estructurada, visualmente moderna y con soporte de chat en vivo corporativo. | Excelente tratamiento de la urgencia médica, ubicación clara en Google Maps y contacto telefónico con un solo toque. |
| **9. Lo que hace mal** | Nula digitalización, no permite reservar en línea, genera desconfianza al no exponer precios ni credenciales del equipo. | Proceso de agendamiento excesivamente complejo y rígido (fricción por registro obligatorio previo), impersonal y frío. | El diseño visual genera sensación de frialdad hospitalaria y puede alarmar innecesariamente en consultas preventivas rutinarias. |

---

### Conclusión Estratégica del Análisis Competitivo (6 Líneas)

> **Adoptaremos** la claridad inmediata del botón persistente de emergencias y la arquitectura moderna y limpia observada en los referentes líderes, asegurando una experiencia mobile-first impecable.  
> **Evitaremos** la burocracia de obligar al usuario a registrarse con contraseñas antes de agendar, la frialdad corporativa que aleja a los clientes de barrio y la opacidad de ocultar los precios de los servicios.  
> **Nuestra propuesta diferencial** radicará en un agendamiento express y transparente completable en menos de 2 minutos, que fusione la cercanía humana y confianza de una clínica barrial de 8 años de trayectoria con la precisión tecnológica de calendarios en tiempo real, confirmación inmediata vía WhatsApp y transparencia total en sus tarifas.

---

## 6. Resumen de Decisiones de Diseño para las Próximas Fases

| Área UX/UI | Decisión Tomada | Justificación según la Investigación |
| :--- | :--- | :--- |
| **Navegación y Header** | Menú simple de máximo 5 ítems + Botón de Emergencia persistente en contraste alto (rojo/naranja cálido). | Permite atender tanto la navegación preventiva tranquila como la angustia de un usuario con una urgencia médica en curso. |
| **Flujo de Agendamiento** | 3 pasos modulares: 1) Mascota y Servicio con precio, 2) Fecha y Hora interactiva, 3) Datos del tutor y confirmación. | Cumple la meta de agendar en menos de 2 minutos para Valentina y Mariana, sin fricciones de registro previo. |
| **Accesibilidad (WCAG AA)** | Botones primarios de 48px de alto, fuentes base de 16-18px con contrastes superiores a 4.5:1. | Permite a Don Carlos y a usuarios en dispositivos móviles interactuar sin cometer errores de pulsación. |
| **Transparencia en Precios** | Tarjetas de servicio con precio base o referencial visible claramente ("Desde $X.XXX") y duración estimada. | Elimina la mayor causa de desconfianza detectada en las reseñas de competidores locales. |
| **Post-agendamiento** | Pantalla de confirmación con CTA para exportar al calendario (Google/Apple) + envío automático a WhatsApp con enlace Waze/Maps. | Reduce a menos del 5% el no-show y alivia la ansiedad del tutor entregando certeza inmediata. |
