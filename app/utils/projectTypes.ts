import type { ProjectsCollectionItem } from '@nuxt/content'

/** Fields needed to render a project tile or link — no Markdown body. */
export type ProjectSummary = Pick<
  ProjectsCollectionItem,
  'title' | 'path' | 'summary' | 'badge' | 'stack' | 'cover' | 'categories' | 'featured' | 'order'
>

export const projectSummaryFields = [
  'title',
  'path',
  'summary',
  'badge',
  'stack',
  'cover',
  'categories',
  'featured',
  'order',
] as const satisfies readonly (keyof ProjectsCollectionItem)[]
