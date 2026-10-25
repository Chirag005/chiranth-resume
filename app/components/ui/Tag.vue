<script setup lang="ts">
withDefaults(defineProps<{ tone?: 'default' | 'accent' }>(), { tone: 'default' })
</script>

<template>
  <span
    class="inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs leading-none"
    :class="tone === 'accent' ? 'border-accent/40 bg-accent-soft text-accent' : 'border-line text-body'"
  >
    <slot />
  </span>
</template>
