<script setup lang="ts">
import { researchInterests } from '~/data/profile'
</script>

<template>
  <section class="container-site py-20 md:py-28" aria-labelledby="research">
    <SectionHeading id="research" index="01" label="Research" title="Research interests">
      The questions I want to spend a PhD on — each grounded in something I've already built.
    </SectionHeading>
    <ul class="grid gap-4 sm:grid-cols-2">
      <li
        v-for="r in researchInterests"
        :key="r.title"
        v-reveal
        class="group flex flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong md:p-8"
      >
        <span class="mb-6 flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
          <Icon :name="r.icon" class="size-5" />
        </span>
        <h3 class="text-xl font-semibold">{{ r.title }}</h3>
        <p class="mt-2 text-body">{{ r.description }}</p>
        <NuxtLink
          :to="`/projects/${r.evidence.slug}`"
          class="mt-6 inline-flex items-center gap-1.5 self-start font-mono text-xs text-muted transition-colors hover:text-accent"
        >
          See: {{ r.evidence.label }}
          <Icon name="icon-[lucide--arrow-right]" class="size-3.5" />
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
