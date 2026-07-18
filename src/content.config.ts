import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const hizmetler = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/hizmetler" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    iconName: z.string(),
    shortDescription: z.string(),
    category: z.string(),
    features: z.array(z.string()),
    steps: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })),
  }),
});

export const collections = { hizmetler };
