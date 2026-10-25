<script setup lang="ts">
/**
 * Generative cover artwork for a project (original SVGs in /public/covers, ~2–3 KB each).
 * Served as images rather than inline SVG so they cost nothing to hydrate and are cached
 * by the browser across pages.
 */
import type { CoverVariant } from '#shared/utils/projects'

withDefaults(defineProps<{ variant: CoverVariant; eager?: boolean }>(), { eager: false })
</script>

<template>
  <img
    :src="`/covers/${variant}.svg`"
    alt=""
    width="480"
    height="300"
    :loading="eager ? 'eager' : 'lazy'"
    :fetchpriority="eager ? 'high' : undefined"
    decoding="async"
    draggable="false"
    class="block bg-[#0a0a0a] object-cover select-none"
  />
</template>
