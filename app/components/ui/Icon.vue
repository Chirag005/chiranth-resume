<script setup lang="ts">
/**
 * Zero-JS icon. `name` is a literal Iconify Tailwind class such as `icon-[lucide--trophy]`,
 * compiled to a CSS mask at build time by @iconify/tailwind4 from the local icon sets.
 * Class names must appear verbatim in source so Tailwind can generate them.
 */
defineProps<{ name: string }>()
</script>

<template>
  <span :class="name" class="inline-block shrink-0" aria-hidden="true" />
</template>
