<script setup lang="ts">
const { site } = useAppConfig()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-line">
    <div
      class="container-site flex flex-col items-start justify-between gap-6 py-10 text-sm text-muted md:flex-row md:items-center"
    >
      <div class="flex items-center gap-3">
        <span class="text-accent"><KnightMark :size="20" /></span>
        <p>© {{ year }} {{ site.name }}. Built with Nuxt.</p>
      </div>
      <SocialLinks />
    </div>
  </footer>
</template>
