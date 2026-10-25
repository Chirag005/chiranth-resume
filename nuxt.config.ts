import tailwindcss from '@tailwindcss/vite'

const siteUrl = process.env.NUXT_SITE_URL ?? 'https://chiranth-resume.vercel.app'

export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxtjs/seo',
    '@vueuse/nuxt',
    '@vercel/analytics/nuxt',
    '@vercel/speed-insights/nuxt',
  ],

  components: [{ path: '~/components', pathPrefix: false }],

  vite: {
    plugins: [tailwindcss()],
    build: {
      // Silence Rolldown's informational plugin-timing report so real warnings stand out.
      rolldownOptions: { checks: { bundlerTimings: false } },
    },
  },

  typescript: {
    strict: true,
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'theme-color', content: '#000000' },
        { name: 'color-scheme', content: 'dark' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
  },

  site: {
    url: siteUrl,
    name: 'Chiranth Nagendra',
    description:
      'CS undergrad building applied AI systems across vision, NLP, speech, and fraud detection — headed toward AI/ML research.',
    defaultLocale: 'en',
    indexable: true,
  },

  seo: {
    meta: {
      ogImage: '/og.png',
    },
  },

  // A hand-designed static OG image lives in /public — no runtime image generation needed.
  ogImage: { enabled: false },
  // Server-only features of @nuxtjs/seo that do nothing on a static deploy.
  aiReady: false,
  skewProtection: false,

  schemaOrg: {
    identity: {
      type: 'Person',
      name: 'Chiranth Nagendra',
      url: siteUrl,
      image: `${siteUrl}/og.png`,
      email: 'chiranthnagendra@gmail.com',
      jobTitle: 'Computer Science undergraduate',
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'JSS Science and Technology University',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mysore',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
      },
      sameAs: ['https://github.com/ChiranthN23', 'https://www.linkedin.com/in/chiranth005'],
    },
  },

  // Self-hosted variable fonts (OFL) — no third-party font requests at build or runtime.
  fonts: {
    providers: {
      google: false,
      googleicons: false,
      bunny: false,
      fontshare: false,
      fontsource: false,
      adobe: false,
      npm: false,
    },
    families: [
      {
        name: 'Inter',
        src: '/fonts/inter-var.woff2',
        weight: '100 900',
        preload: true,
        fallbacks: ['Arial'],
      },
      {
        name: 'Space Grotesk',
        src: '/fonts/space-grotesk-var.woff2',
        weight: '300 700',
        preload: true,
        fallbacks: ['Arial'],
      },
      {
        name: 'JetBrains Mono',
        src: '/fonts/jetbrains-mono-var.woff2',
        weight: '100 800',
        // Only used for small labels — not worth competing with the hero fonts for bandwidth.
        preload: false,
        fallbacks: ['Courier New'],
      },
    ],
  },

  image: {
    format: ['avif', 'webp'],
    quality: 80,
  },

  content: {
    // Node's built-in SQLite (Node >= 22.5): no native dependency to compile on install.
    experimental: { sqliteConnector: 'native' },
    build: {
      markdown: {
        toc: { depth: 2 },
      },
    },
  },

  linkChecker: {
    failOnError: true,
    skipInspections: ['link-text'],
  },

  features: {
    // Inline the (small, gzip ~9 KB) global stylesheet into each HTML page so the first
    // paint does not wait on a render-blocking CSS request.
    inlineStyles: true,
  },

  nitro: {
    rollupConfig: {
      onwarn(warning, warn) {
        // Keep Nitro's default filters (circular deps / eval inside its own runtime), and also
        // drop a harmless misplaced /* @__NO_SIDE_EFFECTS__ */ annotation in Nuxt's lazy-hydration helpers.
        if (['CIRCULAR_DEPENDENCY', 'EVAL', 'INVALID_ANNOTATION'].includes(warning.code ?? '')) return
        warn(warning)
      },
    },
    prerender: {
      crawlLinks: true,
      routes: ['/', '/projects', '/about', '/sitemap.xml', '/robots.txt'],
      failOnError: true,
    },
  },
})
