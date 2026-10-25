<script setup lang="ts">
const { data: projects } = await useProjects()
const featured = computed(() => projects.value.filter((p) => p.featured))
</script>

<template>
  <section class="container-site py-20 md:py-28" aria-labelledby="projects">
    <div class="flex flex-wrap items-end justify-between gap-6">
      <SectionHeading id="projects" index="02" label="Work" title="Featured projects" />
      <NuxtLink
        to="/projects"
        class="mb-10 inline-flex items-center gap-2 text-sm font-medium text-body transition-colors hover:text-accent md:mb-14"
      >
        All projects <Icon name="icon-[lucide--arrow-right]" class="size-4" />
      </NuxtLink>
    </div>
    <ul class="grid gap-6 md:grid-cols-2">
      <li v-for="project in featured" :key="project.path" v-reveal>
        <ProjectTile :project="project" />
      </li>
    </ul>
  </section>
</template>
