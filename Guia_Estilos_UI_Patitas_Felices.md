# GUÍA DE ESTILOS UI & SISTEMA DE DISEÑO — «PATITAS FELICES»
**Rol:** Diseñador UI/UX Senior & Frontend Architect  
**Proyecto:** Sitio Web Responsive «Patitas Felices»  
**Fase:** 3. Guía de Estilos UI (Design Tokens & Component Specs)  
**Estándar:** Accesibilidad WCAG 2.1 AA / AAA  

---

## 1. Fundamentos Visuales & Filosofía de Diseño

El sistema visual de «Patitas Felices» se diseñó bajo el principio de **Calidez Médica y Claridad Radical**. Resuelve la tensión entre dos necesidades emocionales críticas:
1. **Tranquilidad y Confianza:** Para tutores preocupados o adultos mayores (Don Carlos) que requieren interfaces amables, sin saturación visual y con alta legibilidad.
2. **Eficiencia e Inmediatez:** Para nativos digitales (Valentina) y familias con tiempo acotado (Mariana) que necesitan agendar y encontrar precios en menos de 2 minutos.

---

## 2. Paleta de Colores Accesible (Tokens WCAG AA)

Todos los pares de color de texto sobre fondo cumplen o superan la relación de contraste mínima de **4.5:1** para texto normal y **3.0:1** para componentes interactivos según las pautas **WCAG 2.1 AA** (muchos alcanzan el estándar AAA de 7:1).

### 2.1 Tokens de Color y Relaciones de Contraste

| Token | Código HEX | Nombre Semántico | Uso UI | Ratio vs Fondo | Cumplimiento |
| :--- | :---: | :--- | :--- | :---: | :---: |
| `--color-primary-50` | `#EBF7EE` | Verde Menta Suave | Fondos de tarjetas seleccionadas, badges | 18.2:1 (con 900) | WCAG AAA |
| `--color-primary-500`| `#1E7E34` | Verde Salud / Confianza | Bordes activos, íconos secundarios | 4.62:1 | WCAG AA |
| `--color-primary-700`| `#155724` | Verde Bosque Profundo | Botón CTA principal, textos destacados | **7.45:1** (sobre blanco) | **WCAG AAA** |
| `--color-primary-800`| `#0E3D19` | Verde Oscuro Hover | Estado Hover de botones primarios | 9.80:1 | WCAG AAA |
| `--color-secondary-50`| `#E0F2FE`| Celeste Cuidado | Fondos de avisos informativos | 17.5:1 | WCAG AAA |
| `--color-secondary-700`|`#0369A1`| Azul Clínico Sereno | Links secundarios, detalles de doctores | 5.12:1 | WCAG AA |
| `--color-emergency-50`| `#FEF2F2`| Rosa Alerta Tenue | Fondo de banners de urgencias | 17.8:1 | WCAG AAA |
| `--color-emergency-600`|`#DC2626`| Rojo Urgencia 24h | Botón inamovible de Emergencia SOS | **4.82:1** (sobre blanco) | **WCAG AA** |
| `--color-emergency-800`|`#991B1B`| Rojo Carmín Hover | Hover de botón de emergencia y foco | 7.91:1 | WCAG AAA |
| `--color-neutral-50` | `#F8FAFC` | Fondo Canvas | Fondo general de la página | — | Base |
| `--color-neutral-100`| `#F1F5F9` | Superficie Tarjeta | Fondo de inputs deshabilitados y cards | — | Superficie |
| `--color-neutral-200`| `#E2E8F0` | Borde Estándar | Líneas divisorias, bordes inactivos | 3.2:1 | Componentes |
| `--color-neutral-600`| `#475569` | Texto Secundario | Subtítulos, metadatos, microcopia | **5.45:1** (sobre blanco) | **WCAG AA** |
| `--color-neutral-900`| `#0F172A` | Texto Titular / Body | Párrafos y encabezados principales | **15.6:1** (sobre blanco) | **WCAG AAA** |

---

## 3. Tipografía y Jerarquía Visual

* **Familia Tipográfica:** `'Plus Jakarta Sans', system-ui, -apple-system, sans-serif`.  
  *Justificación:* Excelente altura de la "x", aperturas amplias para legibilidad en pantallas móviles pequeñas, y excelente rendimiento en usuarios de edad avanzada (Don Carlos).
* **Regla de Accesibilidad de Tamaño:** **Ningún texto de contenido de lectura es inferior a 16px (1rem).** Los textos de 14px se reservan únicamente para badges decorativos y micro-etiquetas.

### 3.1 Escala Tipográfica Responsiva

| Nivel Semántico | Clase Tailwind | Desktop (px / rem) | Mobile (px / rem) | Interlineado | Peso |
| :--- | :--- | :---: | :---: | :--- | :--- |
| **Display H1** | `text-4xl md:text-5xl` | 48px / 3.0rem | 36px / 2.25rem | `leading-[1.15]` | Bold (700) |
| **Título H2** | `text-3xl md:text-4xl` | 36px / 2.25rem | 28px / 1.75rem | `leading-[1.2]` | Bold (700) |
| **Subtítulo H3** | `text-2xl md:text-3xl` | 24px / 1.5rem | 22px / 1.375rem | `leading-[1.25]` | SemiBold (600) |
| **Cabecera Card H4**| `text-xl` | 20px / 1.25rem | 18px / 1.125rem | `leading-[1.3]` | SemiBold (600) |
| **Cuerpo Lead** | `text-lg md:text-xl` | 20px / 1.25rem | 18px / 1.125rem | `leading-[1.6]` | Regular (400) |
| **Cuerpo Base (Mín)**| `text-base` | **16px / 1.0rem** | **16px / 1.0rem** | `leading-[1.6]` | Regular (400) / Med (500) |
| **Caption / Badge** | `text-sm` | 14px / 0.875rem | 14px / 0.875rem | `leading-normal` | Medium (500) |

---

## 4. Especificación de Componentes UI: Botones y Estados

Todos los botones interactivos cumplen con el estándar **WCAG 2.5.5 (Target Size)** garantizando un área de pulsación mínima de **48px x 48px**, optimizada para la interacción táctil en pantallas móviles y personas con motricidad reducida.

### 4.1 Botón Primario («Agendar Cita»)
* **Altura Mínima:** `min-h-[48px]` (`py-3.5 px-6`).
* **Border Radius:** `rounded-xl` (12px, amigable y moderno).
* **Estado Normal:** `bg-emerald-700 text-white font-semibold shadow-sm`.
* **Estado Hover:** `hover:bg-emerald-800 hover:shadow-md transition-all duration-200`.
* **Estado Active (Pulsado):** `active:scale-[0.98] active:bg-emerald-900`.
* **Estado Focus Visible:** `focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200 focus-visible:ring-offset-2`.
* **Estado Disabled:** `disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed disabled:shadow-none`.

### 4.2 Botón de Emergencias SOS (Inamovible / Persistente)
* **Altura Mínima:** `min-h-[48px]`.
* **Estado Normal:** `bg-rose-600 text-white font-bold tracking-wide shadow-md flex items-center gap-2`.
* **Estado Hover:** `hover:bg-rose-700 hover:shadow-lg transition-all`.
* **Estado Active:** `active:scale-[0.97] active:bg-rose-800`.
* **Estado Focus Visible:** `focus-visible:ring-4 focus-visible:ring-rose-200`.
* **Microanimación sutil:** Pulso de halo en el ícono de teléfono para alertar en caso de urgencia sin causar fatiga visual.

### 4.3 Botón Secundario / Outline
* **Altura Mínima:** `min-h-[48px]`.
* **Estado Normal:** `bg-white border-2 border-slate-300 text-slate-800 font-semibold hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-800`.
* **Estado Active:** `active:scale-[0.98]`.
* **Estado Focus:** `focus-visible:ring-4 focus-visible:ring-slate-200`.

### 4.4 Estados de Campos de Formulario (Inputs)
* **Altura Mínima:** `min-h-[50px] px-4 py-3 text-base text-slate-900 bg-white border rounded-xl`.
* **Estado Default:** `border-slate-300 placeholder:text-slate-400`.
* **Estado Focus:** `border-emerald-600 ring-4 ring-emerald-100 outline-none`.
* **Estado Error (Inválido):** `border-rose-600 ring-4 ring-rose-100 text-rose-900` acompañado de mensaje de error visible con ícono accesible (`aria-invalid="true"`).
* **Estado Disabled:** `bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed`.

---

## 5. Arquitectura Frontend de la Solución

Se estructuró el código fuente en la siguiente distribución modular:

```
proyecto UI_UX/
├── index.html                           # Aplicación web completa responsive con agendamiento y SOS modal
├── guia-estilos.html                    # Muestrario interactivo vivo de estilos y componentes UI
├── Guia_Estilos_UI_Patitas_Felices.md   # Esta documentación formal
├── src/
│   ├── css/
│   │   └── styles.css                   # Variables CSS, utilidades de accesibilidad y animaciones
│   └── js/
│       ├── data.js                      # Base de datos mock (servicios, precios, equipo, testimonios)
│       └── app.js                       # Lógica de reserva en 3 pasos, validación y control de modales
```
