export const projectCategories = ['Vision', 'NLP', 'Speech', 'Fraud', 'Full-stack'] as const

export type ProjectCategory = (typeof projectCategories)[number]

export const coverVariants = ['graph', 'caption', 'wave', 'text', 'bars'] as const

export type CoverVariant = (typeof coverVariants)[number]
