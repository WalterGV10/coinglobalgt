# 🌐 CoinGlobalGt | Plataforma de Gestión Patrimonial Premium

Una aplicación web corporativa de ultra alta gama (Ultra-High-End) desarrollada para presentar los sofisticados servicios fiduciarios, legales y financieros de **CoinGlobalGt**. Diseñada con una estética moderna e inmersiva que proyecta confianza institucional, solidez y conectividad global.

## ✨ Características Principales (Highlights)

*   **Identidad Visual Corporativa**: Interfaz dominada por "Void Navy" profundo y destellos en "Champagne Gold", evocando exclusividad y confianza del sector WealthTech.
*   **Animaciones Físicas e Inmersivas**: Red de partículas dinámica generada en tiempo real (Canvas API) que reacciona de forma fluida a la interacción magnética del usuario, simulando una red de conectividad global financiera.
*   **Micro-interacciones Fluidas**: Implementación de un motor de *Scroll Reveal Component* consciente del dispositivo. Las transiciones de texto (Barridos cinemáticos en escritorio, elevaciones orgánicas y desenfoque *blur* difuminado en móviles) se adaptan inteligentemente a todo el hardware.
*   **Glassmorphism Texturizado**: Tarjetas de información, formularios y navegación utilizan profundidades y filtros desenfocados en combinación con iluminación lateral difusa (Card Glows), brindando el efecto de cristal oscuro premium.
*   **Accesibilidad Integral**: Respeto nativo de preferencias del sistema operativo como `prefers-reduced-motion` sin perder legibilidad ni armonía de diseño.

## 🛠 Tech Stack (Tecnologías)

Esta plataforma está construida sobre las versiones más recientes y potentes del ecosistema web:

*   **Framework**: [Next.js](https://nextjs.org/) (App Router)
*   **Librería UI**: [React 19](https://react.dev/)
*   **Estilos y Motor CSS**: [Tailwind CSS v4](https://tailwindcss.com/) (Arquitectura `@theme`)
*   **Efectos Gráficos**: Node Context Canvas API pura (Partículas) e Intersection Observer API.
*   **Despliegue**: Optimizado para entornos Edge (Vercel).

## 🚀 Inicio Rápido para Desarrollo Local

Sigue estos pasos para correr el proyecto en tu máquina y experimentar el flujo de la red global:

```bash
# 1. Clona el repositorio
git clone https://github.com/WalterGV10/coinglobalgt.git

# 2. Ingresa al directorio del proyecto
cd coinglobalgt

# 3. Instala las dependencias necesarias
npm install

# 4. Inicia el servidor de desarrollo renderizado localmente en localhost:3000
npm run dev
```

## 🏗 Arquitectura de Componentes Clave

*   `app/components/StarField.tsx`: Creador interactivo de partículas en Canvas 2D (Red Global).
*   `app/components/ScrollReveal.tsx`: Interceptor asíncrono que coreografía las entradas de elementos cuando entran en la ventana gráfica (Viewport).
*   `app/globals.css`: Única fuente de verdad. Emplea la nueva directiva `@theme` para crear una paleta dorada/azul precisa sin contaminar la configuración.

---
> Elaborado para redefinir cómo se presenta la excelencia fiduciaria en el plano digital.
