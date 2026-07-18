# Content Collections & Schemas

This document outlines the design and configuration of the content management engine using Astro Content Collections.

---

## 1. Directory Structure of Content

All database-style Markdown content resides in `/src/content/`:
```
src/content/
└── hizmetler/
    ├── arama-motoru-optimizasyonu-seo.md
    ├── bulut-ve-devops-danismanligi.md
    ├── dijital-marka-ve-ux-tasarim.md
    ├── mobil-uygulama-gelistirme.md
    ├── modern-web-gelistirme.md
    └── yapay-zeka-entegrasyonu.md
```

---

## 2. Configuration (`src/content.config.ts`)

With **Astro v6**, the old schema format has migrated. Schemas are now defined in `src/content.config.ts` using the modern `glob` loader.

### Configuration Schema Contract

```typescript
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const hizmetler = defineCollection({
  // Enforces glob lookup of Markdown files within the specific subdirectory
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/hizmetler" }),
  schema: z.object({
    title: z.string(),                  // Service title (e.g. "Modern Web Geliştirme")
    subtitle: z.string(),               // Short subtitle detail
    iconName: z.string(),               // Icon match key for `<Icon />` (e.g. "Cpu")
    shortDescription: z.string(),       // Visual catalog preview text
    category: z.string(),               // Category grouping indicator
    features: z.array(z.string()),      // Highlight bullet list
    steps: z.array(z.object({           // Process roadmap workflow
      title: z.string(),
      description: z.string(),
    })),
  }),
});

export const collections = { hizmetler };
```

---

## 3. Dynamic Page Resolution (`src/pages/hizmetlerimiz/[slug].astro`)

To render each Markdown service, the router maps `slug` parameters using the document identifier `id`.

### Code Implementation (`getStaticPaths` & `render`)

```astro
---
import Layout from '../../layouts/Layout.astro';
import { getCollection, render } from 'astro:content';

export async function getStaticPaths() {
  const serviceEntries = await getCollection('hizmetler');
  return serviceEntries.map(entry => ({
    params: { slug: entry.id }, // Map slug parameter to content ID
    props: { entry, allEntries: serviceEntries },
  }));
}

const { entry, allEntries } = Astro.props;
// Astro v6 uses the render() function to compile Markdown components
const { Content } = await render(entry);
---

<Layout title={entry.data.title} description={entry.data.shortDescription}>
  <!-- Sidebar Menu (Left Column) -->
  <aside>
    {allEntries.map((navItem) => (
      <a href={`/hizmetlerimiz/${navItem.id}`}>
        {navItem.data.title}
      </a>
    ))}
  </aside>

  <!-- Main Content Renderer -->
  <article>
    <Content />
  </article>
</Layout>
```

---

## 4. Markdown File Structure Reference

Every service Markdown file must match the frontmatter schema structure exactly. Below is an example structure:

```markdown
---
title: "Modern Web Geliştirme"
subtitle: "Hız, Güvenlik ve Dönüşüm Odaklı Özel Web Uygulamaları"
iconName: "Cpu"
shortDescription: "Sitenizi standart, yavaş kurumsal şablonlardan kurtarıyoruz."
category: "Web & Yazılım"
features:
  - "Lighthouse performansı: 95+ (Roket hızı)"
  - "Mobil cihazlarla %100 uyumlu"
  - "SEO altyapısı entegre"
steps:
  - title: "Analiz & Tasarım"
    description: "Markanızın ve hedef kitlenizin beklentilerini analiz ediyoruz."
  - title: "Kodlama & Optimizasyon"
    description: "Gereksiz kod yığınlarından kaçınarak en güncel teknolojilerle geliştiriyoruz."
---

Buraya Markdown formatında uzun açıklama ve dökümantasyon yazılır. Astro bu kısmı sayfa gövdesinde otomatik olarak HTML'e dönüştürür.
```
