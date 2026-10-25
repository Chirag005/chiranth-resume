import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { coverVariants, projectCategories } from './shared/utils/projects'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'page',
      source: 'projects/*.md',
      schema: z.object({
        /** Position in listings and in the NEXT MOVE chain. */
        order: z.number().int(),
        /** One-sentence summary for tiles and meta descriptions. */
        summary: z.string().max(200),
        /** Optional award / context ribbon, e.g. "Winner · 8th Mile Hackathon". */
        badge: z.string().optional(),
        /** Context line, e.g. "Hackathon project" or "Internship · Aragen Life Sciences". */
        context: z.string(),
        period: z.string().optional(),
        categories: z.array(z.enum(projectCategories)).min(1),
        /** Shown in the tile marquee and the Tech section. */
        stack: z.array(z.string()).min(1),
        /** Headline numbers for the metric strip — only values stated on the resume. */
        metrics: z
          .array(z.object({ value: z.string(), label: z.string() }))
          .max(4)
          .default([]),
        /** Generative cover artwork variant. */
        cover: z.enum(coverVariants),
        featured: z.boolean().default(false),
        links: z.array(z.object({ label: z.string(), href: z.string().url() })).default([]),
      }),
    }),
  },
})
