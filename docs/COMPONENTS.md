# Components Directory & Specs

This document describes the design, API contracts, and internal logic of the core components located in `src/components/` and `src/layouts/`.

---

## 1. Global Layouts

### `src/layouts/Layout.astro`
The main shell for all static pages. It ensures consistent loading of styles, metadata, and structural sections.

- **Imported Styles**: Imports `/src/index.css` directly to ensure Tailwind v4 is initialized across all pages.
- **Props**:
  ```typescript
  interface Props {
    title: string;
    description?: string;
    image?: string;
  }
  ```
- **Internal Elements**:
  - Incorporates `<BaseHead />` within the HTML `<head>`.
  - Places `<Navbar />` at the top of the `<body>`.
  - Embeds the page content using the `<slot />` element inside a `<main class="pt-[88px]">` container, ensuring the fixed navbar doesn't cover content.
  - Places `<Footer />` at the bottom of the page.
- **Styling**: Uses `scroll-padding-top: 100px` to handle offsets gracefully when clicking on anchored links from the navbar.

---

## 2. Reusable Visual Components

### `src/components/BaseHead.astro`
Injects essential SEO tags, web fonts, and analytics triggers into the HTML document head.

- **SEO & OpenGraph Tags**: Configures page titles, canonical URLs, meta descriptions, and visual preview graphics.
- **Typography Integration**: Imports high-performance, beautiful display and body fonts directly from Google Fonts:
  - **Primary Sans**: `Inter` (sans-serif) for body and generic UI text.
  - **Display (Headings)**: `Outfit` or custom modern display styles.
- **Favicon & Assets**: Points to configured asset pathways.

---

### `src/components/Navbar.astro`
The main navigation header. It features a sticky design with an interactive, responsive mobile hamburger menu.

- **Dynamic Interactive States**:
  - Contains standard brand link headers.
  - Includes a mobile trigger button with an inline `<script>` module that toggles mobile drawer visibility and body scroll properties.
- **Interactive Script Logic**:
  ```javascript
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  // Simple state toggle
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    // Toggle icon state or open animation
  });
  ```
- **Layout Styling**: Positioned as `fixed top-0 left-0 w-full z-50` with high-contrast neutral backgrounds (`bg-white/80` or `bg-neutral-900/80` with background blur `backdrop-blur-md`).

---

### `src/components/Footer.astro`
The institutional footer displayed at the bottom of every page.

- **Grid Alignment**: Features structured columns displaying corporate services, navigation shortcuts, email contacts, and official copyright stamps.
- **Social Connects**: Interactive external social media pathways utilizing the lightweight `<Icon />` component.

---

### `src/components/Icon.astro`
A performance-first icon loader. Rather than loading large client-side packages like `lucide-react` directly in client bundles, this server-side compiled component matches request strings to precise inline SVG elements.

- **Props**:
  ```typescript
  interface Props {
    name: string;      // The Lucide icon string name (e.g. "Cpu", "TrendingUp", "ArrowRight")
    class?: string;    // Custom Tailwind styles (e.g. "text-emerald-500 hover:rotate-12")
    size?: number;     // Width & height constraints in pixels (defaults to 24)
  }
  ```
- **Supported Icons**:
  - `Cpu`, `Sparkles`, `Palette`, `Smartphone`, `Cloud`, `TrendingUp`, `Phone`, `Mail`, `MapPin`, `Clock`, `ArrowRight`, `ArrowUpRight`, `ShieldCheck`, `FileText`, `Check`, `Award`, `Users`, `Target`, `Calendar`, `Linkedin`, `Twitter`, `Github`, `Star`, `ChevronLeft`, `ChevronRight`.
- **Performance Benefit**: The SVG content is evaluated during build time and emitted directly as inline DOM nodes, allowing styling changes and vector resolution adjustments with zero runtime JS payload.
