# 🗳️ InfoVoto.pe

**InfoVoto.pe** es una plataforma web educativa e informativa diseñada para empoderar a los ciudadanos peruanos con información transparente, actualizada y accesible sobre el proceso electoral. La aplicación permite a los votantes conocer a los candidatos, comparar propuestas, simular su voto y acceder a un asistente AI para resolver dudas sobre el proceso electoral.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![React](https://img.shields.io/badge/React-19.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38bdf8)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#️-tecnologías)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Configuración](#️-configuración)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Scripts Disponibles](#-scripts-disponibles)
- [Contribución](#-contribución)
- [Licencia](#-licencia)

---

## 🌟 Características

### 🏛️ Información Electoral
- **Vista de Agrupaciones Políticas**: Explora todos los partidos y movimientos políticos participantes
- **Perfiles de Candidatos**: Información detallada sobre candidatos presidenciales y congresuales
- **Comparador de Propuestas**: Compara planes de gobierno y propuestas de diferentes candidatos
- **Ranking de Candidatos**: Visualiza la popularidad y aceptación de los candidatos

### 🗳️ Simulador de Votación
- Tutorial interactivo guiado paso a paso
- Simulación realista del proceso de votación
- Aprende a marcar correctamente la cédula electoral
- Evita errores comunes el día de las elecciones

### 🤖 Asistente AI Electoral
- Chatbot inteligente con IA (Google Gemini / OpenAI)
- Responde preguntas sobre el proceso electoral
- Información sobre candidatos y propuestas
- Historial de conversaciones persistente

### 👤 Mi Perfil
- Consulta tu centro de votación
- Visualiza tu mesa de votación asignada
- Accede a croquis del local de votación
- Mapa integrado de Google Maps
- Funcionamiento offline con caché de datos

### 📰 Noticias Electorales
- Feed de noticias actualizadas sobre las elecciones
- Artículos detallados sobre candidatos y eventos
- Análisis político y cobertura mediática

### 📅 Calendario Electoral
- Fechas importantes del proceso electoral
- Countdown hasta el día de las elecciones
- Calendario completo de eventos

### 📚 Voto Informado
- Recursos educativos sobre el proceso electoral
- Marco legal y normativas
- Seguridad y transparencia del voto
- Mejores prácticas para votar

---

## 🛠️ Tecnologías

### Frontend
- **[Next.js 16](https://nextjs.org/)** - Framework React con App Router
- **[React 19](https://react.dev/)** - Biblioteca de interfaz de usuario
- **[TypeScript 5](https://www.typescriptlang.org/)** - Tipado estático
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes UI reutilizables

### UI Components & Libraries
- **[Radix UI](https://www.radix-ui.com/)** - Componentes accesibles sin estilo
- **[Lucide React](https://lucide.dev/)** - Iconos modernos
- **[Recharts](https://recharts.org/)** - Gráficos y visualizaciones
- **[Embla Carousel](https://www.embla-carousel.com/)** - Carruseles responsive
- **[Driver.js](https://driverjs.com/)** - Tours guiados interactivos
- **[React Hot Toast](https://react-hot-toast.com/)** - Notificaciones elegantes

### AI & Chat
- **[@ai-sdk/react](https://sdk.vercel.ai/)** - Vercel AI SDK para React
- **[@ai-sdk/google](https://sdk.vercel.ai/providers/ai-sdk-providers/google)** - Integración con Google Gemini
- **[@ai-sdk/openai](https://sdk.vercel.ai/providers/ai-sdk-providers/openai)** - Integración con OpenAI

### Backend & Database
- **[Supabase](https://supabase.com/)** - Backend as a Service (BaaS)
- **PostgreSQL** - Base de datos relacional (via Supabase)

### Validación & Utilidades
- **[Zod](https://zod.dev/)** - Validación de esquemas TypeScript
- **[clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Gestión de clases CSS
- **[class-variance-authority](https://cva.style/)** - Variantes de componentes

### Calidad de Código
- **[ESLint 9](https://eslint.org/)** - Linter para JavaScript/TypeScript
- **eslint-config-next** - Configuración ESLint para Next.js

---

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18.x o superior)
- **npm** (versión 9.x o superior) o **yarn** / **pnpm**
- **Git** para control de versiones

---

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/infovoto.pe.git
cd infovoto.pe
```

### 2. Instalar dependencias

```bash
npm install
# o
yarn install
# o
pnpm install
```

---

## ⚙️ Configuración

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# API Configuration
NEXT_PUBLIC_API_BASE_URL=your_backend_api_url

# AI Configuration (opcional)
OPENAI_API_KEY=your_openai_api_key
GOOGLE_GENERATIVE_AI_API_KEY=your_google_gemini_api_key
```

### Configuración de Supabase

1. Crea un proyecto en [Supabase](https://supabase.com/)
2. Copia las credenciales desde la configuración del proyecto
3. Configura las tablas necesarias para usuarios, votos, chats, etc.

---

## 💻 Uso

### Desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

La página se recarga automáticamente cuando editas los archivos.

### Producción

#### Build

Genera una versión optimizada para producción:

```bash
npm run build
```

#### Start

Inicia el servidor de producción:

```bash
npm run start
```

### Linting

Ejecuta el linter para verificar la calidad del código:

```bash
npm run lint
```

---

## 📁 Estructura del Proyecto

```
infovoto.pe/
├── public/                      # Archivos estáticos
│   ├── img/                    # Imágenes y logos
│   └── *.svg                   # Iconos SVG
├── src/
│   ├── app/                    # App Router de Next.js
│   │   ├── (tabs)/            # Rutas con layout compartido
│   │   │   ├── page.tsx       # Página principal
│   │   │   ├── agrupaciones/  # Partidos políticos
│   │   │   ├── candidato/     # Perfiles de candidatos
│   │   │   ├── chat/          # Chat con AI
│   │   │   ├── fechas/        # Calendario electoral
│   │   │   ├── mi-perfil/     # Perfil del usuario
│   │   │   ├── noticias/      # Noticias electorales
│   │   │   ├── simulador/     # Simulador de votación
│   │   │   └── voto-informado/# Recursos educativos
│   │   ├── api/               # API Routes
│   │   │   ├── chat/          # Endpoints de chat AI
│   │   │   ├── chats/         # Gestión de conversaciones
│   │   │   ├── contexts/      # Contextos de chat
│   │   │   └── posts/         # Publicaciones
│   │   ├── globals.css        # Estilos globales
│   │   └── layout.tsx         # Layout raíz
│   ├── components/            # Componentes reutilizables
│   │   ├── ui/                # Componentes shadcn/ui
│   │   ├── countdown/         # Countdown de elecciones
│   │   ├── navbar/            # Barra de navegación
│   │   ├── footer/            # Pie de página
│   │   ├── sidebar/           # Barra lateral
│   │   └── ...                # Otros componentes
│   ├── config/                # Configuraciones
│   │   ├── api.ts             # Configuración de API
│   │   └── fonts.ts           # Configuración de fuentes
│   ├── lib/                   # Utilidades y librerías
│   │   ├── supabase.ts        # Cliente de Supabase
│   │   └── utils.ts           # Funciones auxiliares
│   └── types/                 # Tipos TypeScript
│       └── chat.ts            # Tipos de chat
├── .eslintrc.json             # Configuración ESLint
├── components.json            # Configuración shadcn/ui
├── next.config.ts             # Configuración Next.js
├── package.json               # Dependencias del proyecto
├── postcss.config.mjs         # Configuración PostCSS
├── tailwind.config.ts         # Configuración Tailwind CSS
└── tsconfig.json              # Configuración TypeScript
```

---

## 📜 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run start` | Inicia el servidor de producción |
| `npm run lint` | Ejecuta ESLint para verificar errores |

---

## 🤝 Contribución

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guía de Estilo

- Utiliza TypeScript para todo el código
- Sigue las convenciones de ESLint configuradas
- Escribe nombres de componentes en PascalCase
- Usa comentarios descriptivos cuando sea necesario
- Asegúrate de que `npm run lint` pase sin errores

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

## 👥 Autores

- **Equipo InfoVoto.pe** - [GitHub](https://github.com/tu-usuario)

---

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) por el framework increíble
- [Vercel](https://vercel.com/) por el hosting y AI SDK
- [Supabase](https://supabase.com/) por el backend
- [shadcn/ui](https://ui.shadcn.com/) por los componentes UI
- Todos los contribuidores del proyecto

---

## 📞 Contacto

Para preguntas o soporte, contacta a: info@infovoto.pe

---

## 🌐 Enlaces Útiles

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de React](https://react.dev/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Documentación de Supabase](https://supabase.com/docs)
- [Vercel AI SDK](https://sdk.vercel.ai/docs)

---

**Hecho con ❤️ para promover la democracia y el voto informado en Perú** 🇵🇪
