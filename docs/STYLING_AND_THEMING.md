# Styling & Design System Guide

This document describes the design token choices, styling architecture, typography selection, and color palettes used throughout the **Astra Digital** platform.

---

## 1. Tailwind CSS v4 Core Structure

The project implements **Tailwind CSS v4**, which simplifies setup by eliminating PostCSS config files. The entire tailwind bundle and options are initialized via `@import` statement inside `src/index.css`.

### Global CSS File (`src/index.css`)

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Space Grotesk", sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

/* Custom visual styling rules */
html {
  scroll-behavior: smooth;
}

.prose h2, .prose h3 {
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--color-neutral-900);
}
```

---

## 2. Design System Tokens & Identity

The theme focuses on a premium corporate look featuring a high-contrast neutral slate body with high-vibrancy green/emerald accents, conveying technical expertise, performance, and clean execution.

### Brand Palettes

| Element / Utility | Tailwind Class | Aesthetic Objective |
| :--- | :--- | :--- |
| **Main Background** | `bg-neutral-50` / `bg-white` | Soft off-white to reduce eye-strain while keeping layout modern. |
| **Main Typography** | `text-neutral-900` / `text-neutral-600` | Highly legible contrast without the harshness of pure black. |
| **Brand Color Accents** | `text-emerald-600` / `bg-emerald-500` | High-vibrancy tech feel representing growth, speed, and precision. |
| **Highlight Text/CTA** | `bg-neutral-900 hover:bg-emerald-600` | Elegant transition from deep charcoal to emerald tech green. |

---

## 3. Typography Pairings

We use an intentional typographic scale that contrasts technical geometry with extreme legibility.

- **Primary Body Font**: **Inter** (`font-sans`)
  - Applied to standard paragraphs, descriptive blocks, navigational headers, and form inputs. Optimized for reading ease at all sizes.
- **Display Headings**: **Space Grotesk** (`font-display`)
  - Applied to main titles, landing page banners, and section headers. Gives the layout an engineered, progressive, and modern vibe.

---

## 4. UI Layout & Animation Elements

Micro-animations are used deliberately to emphasize interface states and build momentum without distracting the user:

- **Entrance Animations**: Animated badge elements utilize `animate-pulse` to draw immediate visual attention to the company motto.
- **Micro-Interactions (Hover States)**:
  - Cards scale slightly with `hover:scale-102` or `hover:-translate-y-1.5` combined with `transition-all duration-300` to indicate clickability.
  - Interactive icons within buttons move dynamically using Tailwind groups: e.g. `group-hover:translate-x-1 transition-transform` on the right-arrow icon inside CTAs.
- **Grid Layout Overlays**: Custom grids simulate structural blueprints on the hero background, using linear-gradients masked via radial gradients.
