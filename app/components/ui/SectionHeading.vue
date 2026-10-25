<script setup lang="ts">
defineProps<{ index: string; label: string; title: string; id: string }>()
</script>

<template>
  <header class="mb-10 md:mb-14">
    <p class="eyebrow mb-3">
      <span class="text-accent">{{ index }}</span> / {{ label }}
    </p>
    <h2 :id="id" class="text-[clamp(2rem,5vw,3rem)] font-bold">{{ title }}</h2>
    <p v-if="$slots.default" class="mt-4 max-w-2xl text-lg text-muted">
      <slot />
    </p>
  </header>
</template>
