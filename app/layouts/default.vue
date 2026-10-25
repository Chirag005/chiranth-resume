<template>
  <div class="flex min-h-svh flex-col">
    <a
      href="#main"
      class="sr-only z-[60] rounded-full bg-accent px-4 py-2 font-medium text-black focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
    >
      Skip to content
    </a>
    <SiteHeader />
    <main id="main" class="flex-1" tabindex="-1">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
