# Development & Deployment Guide

This guide describes how to run, compile, lint, and deploy the **Astra Digital** platform.

---

## 1. Quick Start Commands

All main tasks are pre-configured inside `package.json`:

| Script Name | command | Role / Description |
| :--- | :--- | :--- |
| `npm run dev` | `astro dev --port=3000 --host=0.0.0.0 --force` | Starts the local dev server on port `3000`. Overrides any stale processes. |
| `npm run build` | `astro build` | Compiles the files into optimized, static HTML/CSS inside `/dist/`. |
| `npm run lint` | `astro sync && tsc --noEmit` | Generates Content Collection typings and executes a strict TypeScript check. |
| `npm run preview`| `astro preview --port=3000 --host=0.0.0.0`| Serves the locally compiled production build (`/dist/`) on port `3000`. |
| `npm run clean` | `rm -rf dist .astro` | Clears generated build outputs and caches to resolve compiler discrepancies. |

---

## 2. Infrastructure & Port Constraints

- **Single External Port**: The platform reverse proxy ONLY allows traffic through **Port 3000**.
- **Dev Bindings**: The development and preview servers are strictly bound to `0.0.0.0` at port `3000`. Do not override this port in `vite` config blocks or start parameters, as it will break the live preview iframe.
- **Port Reuse Force**: We append `--force` to the `astro dev` start sequence to avoid issues where previous instances of Astro didn't clean up their process handles correctly.

---

## 3. Form Submission & Maps Integration

To keep loading speeds exceptionally high (Lighthouse 95+), we avoid embedding heavy third-party tracking scripts or interactive components on initial page load.

### Interactive Google Maps Integration
The contact page (`/iletisim`) features a custom map element:
1. When the page loads, it shows a static, lightweight preview card styled as a map placeholder. This keeps resource consumption at a absolute minimum.
2. An interactive `Load Map` button is provided. Clicking this button dynamically creates a Google Maps `<iframe>` and injects it into the DOM, keeping initial page load incredibly fast.

### Contact Form Handlers
- The contact form is a fully functional semantic form styled with clean input wrappers.
- A dynamic success banner is wired directly in the client `<script>` module of `iletisim.astro`. When a user submits the form, default actions are prevented, success metrics are displayed, the inputs are reset, and the user is scrolled smoothly to the thank-you state.

---

## 4. Troubleshooting Compile Issues

- **TypeScript Content Typings**: If you see compilation or editor warnings like `Cannot find module 'astro:content' or its corresponding type declarations`, run:
  ```bash
  npm run lint
  ```
  This triggers `astro sync`, which automatically compiles content declarations into the hidden `.astro/` system folder.
- **Cache Mismatch**: If content collections do not update dynamically, run:
  ```bash
  npm run clean
  ```
  This flushes compiler caches. Next time you start `npm run dev`, everything will recompile from scratch.
