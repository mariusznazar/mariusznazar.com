import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

/** YAML reads a bare year (2020) as a number; normalize to string and validate YYYY or YYYY-MM. */
const yearMonth = z.preprocess(
  (v) => (v === null || v === undefined ? null : String(v)),
  z.string().regex(/^\d{4}(-\d{2})?$/).nullable(),
);

const base = {
  id: z.string().optional(),
  start: yearMonth,
  end: yearMonth,
  title: z.string(),
  org: z.string().nullable().default(null),
  summary: z.string().nullable().default(null),
  tools: z.array(z.string()).default([]),
  items: z.array(z.object({ title: z.string(), status: z.string().optional() })).optional(),
};

export const collections = {
  work: defineCollection({
    loader: file('src/content/timeline/praca.yaml'),
    schema: z.object({ ...base, track: z.literal('praca') }),
  }),
  artefacts: defineCollection({
    loader: file('src/content/timeline/artefakty.yaml'),
    schema: z.object({
      ...base,
      track: z.literal('artefakt'),
      access: z.enum(['publiczny', 'do-pokazania', 'niepubliczny']),
      link: z.string().url().nullable().default(null),
      ongoing: z.boolean().optional(),
    }),
  }),
  education: defineCollection({
    loader: file('src/content/timeline/edukacja.yaml'),
    schema: z.object({
      ...base,
      track: z.literal('edukacja'),
      status: z.enum(['ukończony', 'bez zaliczenia', 'planowany']).optional(),
      link: z.string().url().nullable().optional(),
    }),
  }),
};
