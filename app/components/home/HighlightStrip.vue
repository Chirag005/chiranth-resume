<script setup lang="ts">
import { highlights } from '~/data/profile'
</script>

<template>
  <section aria-label="Highlights" class="border-b border-line">
    <ul class="container-site grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <li
        v-for="(h, i) in highlights"
        :key="h.label"
        class="flex items-start gap-4 border-line py-7 sm:px-6 lg:py-9"
        :class="[
          i > 0 && 'border-t sm:border-t-0',
          i % 2 === 1 && 'sm:border-l',
          i >= 2 && 'sm:border-t lg:border-t-0',
          i === 2 && 'lg:border-l',
          i === 0 && 'sm:pl-0',
          i === 2 && 'sm:pl-0 lg:pl-6',
        ]"
      >
        <span
          class="flex size-10 shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-accent"
        >
          <Icon :name="h.icon" class="size-5" />
        </span>
        <div>
          <p class="eyebrow">{{ h.label }}</p>
          <p class="mt-1 leading-snug font-medium text-ink">{{ h.value }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>
