
# codedale

A small React + Vite frontend project that recreates the CodeDale landing experience. This repository contains a responsive component-based UI built with React, Vite and Tailwind CSS. It includes a main layout with navigation and footer, several home-page sections (services, works, brand slider, testimonial cards), and simple client-side routing.

## Features

- **Responsive layout**: Desktop and mobile navigation with an animated mobile dropdown.
- **Component-driven**: Reusable components under `src/components` and `src/components/HomeComponents`.
- **TailwindCSS**: Utility-first styling with a few custom animations in `src/index.css`.
- **Routing**: Uses `react-router-dom` and a `MainLayout` wrapper.

## Tech stack

- **Framework**: React (v19)
- **Bundler / Dev Server**: Vite
- **Styling**: Tailwind CSS
- **Icons**: lucide-react
- **Extras**: swiper (installed but optional)

## Getting started

Prerequisites

- Node.js (LTS) and npm installed

Install and run (PowerShell)

```powershell
# install dependencies
npm install

# start dev server
npm run dev

# build the production bundle
npm run build

# preview the production build locally
npm run preview
```

Available npm scripts (from `package.json`)

- `dev`: Runs the Vite development server.
- `build`: Builds a production bundle with Vite.
- `preview`: Previews the built app locally.
- `lint`: Runs ESLint across the project.

## Project structure (important files)

- `index.html` — App HTML entry.
- `src/main.jsx` — App entry and React mount.
- `src/App.jsx` — Router and top-level routes.
- `src/mainlayout/MainLayout.jsx` — Layout wrapper (navbar + outlet + footer).
- `src/components/Navbar.jsx` — Desktop + mobile navigation.
- `src/components/Footer.jsx` — Footer and newsletter form.
- `src/components/HomeComponents` — Home page sections (e.g., `Cards.jsx`, `Services.jsx`, `Works.jsx`, `BrandSlider.jsx`).
- `src/Home.jsx` — Home page which composes the components.
- `src/index.css` — Tailwind import + custom animations.

## Components overview

- `Navbar.jsx`: Shows a compact mobile menu and a wider desktop header with quick links and a CTA.
- `Footer.jsx`: Company info, navigation links, socials and newsletter form.
- `Cards.jsx`: Testimonial / case-study card used on the Home page.
- `Services.jsx`, `Works.jsx`, `BrandSlider.jsx`: Visual sections for services, featured works, and brand logos.

## Styling and animations

The project uses Tailwind CSS; `src/index.css` imports Tailwind and defines a few small keyframe animations used across components (e.g., marquee animation for the brand slider and a slide-up animation for entrance effects).

## Routing

Client-side routing is handled in `src/App.jsx` with `react-router-dom`. The `MainLayout` component contains the `Navbar`, `Outlet`, and `Footer` so child pages are rendered inside the shared layout.



