<script setup lang="ts">
import type { ProjectsCollectionItem } from '@nuxt/content'

defineProps<{ project: ProjectsCollectionItem }>()
</script>

<template>
  <header class="pt-10 md:pt-16">
    <NuxtLink
      to="/projects"
      class="group mb-10 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
    >
      <Icon
        name="icon-[lucide--arrow-left]"
        class="size-4 transition-transform group-hover:-translate-x-0.5"
      />
      All projects
    </NuxtLink>

    <div class="mb-5 flex flex-wrap items-center gap-2">
      <Tag v-if="project.badge" tone="accent">{{ project.badge }}</Tag>
      <Tag v-for="c in project.categories" :key="c">{{ c }}</Tag>
    </div>

    <h1 class="max-w-4xl text-[clamp(2.5rem,7vw,4.75rem)] font-bold">{{ project.title }}</h1>
    <p class="mt-6 max-w-3xl text-lg leading-relaxed text-body md:text-xl">{{ project.summary }}</p>

    <dl class="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-sm">
      <div>
        <dt class="eyebrow mb-1">Context</dt>
        <dd class="text-ink">{{ project.context }}</dd>
      </div>
      <div v-if="project.period">
        <dt class="eyebrow mb-1">Period</dt>
        <dd class="text-ink">{{ project.period }}</dd>
      </div>
    </dl>

    <MetricStrip :metrics="project.metrics ?? []" class="mt-10" />
  </header>
</template>
