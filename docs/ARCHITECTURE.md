# Project Architecture Overview

This document describes the high-level architecture, directory layout, and key technology choices of the **Astra Digital** agency web application. This is designed to help other developers or AI assistants quickly understand and navigate the codebase.

---

## 1. Core Technology Stack

- **Framework**: **Astro v6.x**
  - **Astro Island Architecture**: High-performance static site generation (SSG) by default with support for partial client-side hydration.
  - **Content Collections**: Fully typed, schema-validated content structures for dynamic routing and data fetching.
  - **Astro v6 Render API**: Uses the modern `render(entry)` utility from `astro:content` for compiling Markdown entries.
- **Styling**: **Tailwind CSS v4**
  - Configured using `@import "tailwindcss";` in `/src/index.css`.
  - No legacy PostCSS/Tailwind configuration files required.
- **Icons**: SVG-based custom `Icon.astro` component mapping Lucide icon names to performant inline SVGs, preventing heavy client-side bundler overhead.
- **Languages**: **TypeScript & CSS**.

---

## 2. Directory Structure

Below is the directory map and the role of each directory/file:

```
├── .astro/                      # Astro cache and generated types (auto-sync)
├── docs/                        # Project architectural & development documentation (this folder)
│   ├── ARCHITECTURE.md          # System architecture overview
│   ├── COMPONENTS.md            # Reusable and layout Astro components
│   ├── CONTENT_COLLECTIONS.md   # Schema validation & content collections guide
│   ├── STYLING_AND_THEMING.md   # Tailwind v4 configuration and design systems
│   └── DEVELOPMENT_GUIDE.md     # Command line scripts, build, and linter usage
├── src/
│   ├── components/              # Reusable .astro layout & visual elements
│   │   ├── BaseHead.astro       # SEO, metadata, fonts, OpenGraph headers
│   │   ├── Footer.astro         # Consistent institutional footer
│   │   ├── Icon.astro           # Dynamic, lightweight Lucide-equivalent inline SVGs
│   │   └── Navbar.astro         # Sticky header with mobile drawer & navigation
│   ├── content/                 # Data directory for markdown collections
│   │   └── hizmetler/           # Individual service pages (.md files)
│   ├── layouts/
│   │   └── Layout.astro         # Universal wrapper layout (HTML skeleton, Navbar, Footer)
│   ├── pages/                   # File-based routing structure
│   │   ├── hakkimizda.astro     # "About Us" and company history page
│   │   ├── hizmetlerimiz/       # Sub-routes for specific services
│   │   │   └── [slug].astro     # Dynamic service slug renderer
│   │   ├── hizmetlerimiz.astro  # Catalog of all services
│   │   ├── iletisim.astro       # Interactive contact and dynamic map page
│   │   └── index.astro          # Landing Page (Hero, Stats, Featured, Testimonials)
│   ├── content.config.ts        # Content Collections schema definitions (Astro v6 format)
│   ├── data.ts                  # Static mock-free metadata (team, milestones, testimonials)
│   ├── index.css                # Tailwind CSS v4 entry point and custom global styles
│   └── types.ts                 # Shared TypeScript interfaces & types
├── astro.config.mjs             # Global Astro compiler and dev server settings
├── metadata.json                # Project identification manifest
├── package.json                 # Dependency graph & task execution scripts
└── tsconfig.json                # TypeScript project compilation settings
```

---

## 3. High-Performance Design Patterns

1. **Zero Client-Side JavaScript by Default**: Layouts and components leverage server-rendered HTML and CSS, resulting in virtually instant load times and optimal SEO indexation.
2. **Dynamic Progressive Hydration**: Interactive features (like contact form submission, lazy-loaded interactive Google Map, and mobile navigation burger menu toggle) utilize small, inline `<script>` modules scoped strictly inside their respective Astro components. This avoids the overhead of large runtime frameworks.
3. **Optimized SEO Header Hierarchy**: Under `BaseHead.astro`, standard OpenGraph tags, modern web fonts (Inter & Space Grotesk), viewport constraints, and dynamic page titles are automatically managed.
