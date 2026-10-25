interface PageSeoOptions {
  title: string
  description: string
  type?: 'website' | 'article' | 'profile'
}

/** Per-page title, description and Open Graph metadata. Canonical URLs come from @nuxtjs/seo. */
export function usePageSeo({ title, description, type = 'website' }: PageSeoOptions) {
  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: type,
    ogImage: '/og.png',
    ogImageAlt: 'Chiranth Nagendra — Applied AI portfolio',
    ogImageWidth: 1200,
    ogImageHeight: 630,
  })
}
