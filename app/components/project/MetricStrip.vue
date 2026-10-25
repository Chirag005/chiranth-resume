<script setup lang="ts">
defineProps<{ metrics: { value: string; label: string }[] }>()
</script>

<template>
  <dl
    v-if="metrics.length"
    class="grid overflow-hidden rounded-2xl border border-line bg-line [gap:1px]"
    :class="metrics.length >= 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'"
  >
    <div v-for="m in metrics" :key="m.label" class="flex flex-col-reverse gap-1 bg-surface p-5 md:p-6">
      <dt class="text-sm text-muted">{{ m.label }}</dt>
      <dd class="font-display text-3xl font-bold tracking-tight text-accent md:text-4xl">{{ m.value }}</dd>
    </div>
  </dl>
</template>
