import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One file per finished job (docs/PLAN.md §5, grilling Q9).
const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(), // 지역 + 건물 + 공사 (+ 용량)
      site: z.string(), // shown name: 실명 for public sites, 익명 for private (ADR 0003)
      region: z.string(),
      building: z.string(),
      service: z.enum(['substation', 'capacity', 'transformer', 'wiring', 'newbuild']),
      capacity: z.string().optional(),
      completed: z.string(), // YYYY-MM
      duration: z.string().optional(),
      tags: z.array(z.string()).default([]),
      summary: z.string().optional(), // short factual summary; client to confirm
      featured: z.number().optional(), // order on the home page
      photos: z.array(
        z.object({ src: image(), stage: z.enum(['before', 'during', 'after']), caption: z.string() }),
      ),
    }),
});

export const collections = { cases };
