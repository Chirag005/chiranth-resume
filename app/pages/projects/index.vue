<script setup lang="ts">
import { projectCategories, type ProjectCategory } from '#shared/utils/projects'

usePageSeo({
  title: 'Projects',
  description:
    'Applied AI and full-stack projects by Chiranth Nagendra — fraud detection, image captioning, speech, NLP, and an HR analytics dashboard.',
})

const { data: projects } = await useProjects()

const route = useRoute()
const router = useRouter()

const isCategory = (v: unknown): v is ProjectCategory => projectCategories.includes(v as ProjectCategory)

const filter = computed<ProjectCategory | 'All'>({
  get: () => (isCategory(route.query.area) ? route.query.area : 'All'),
  set: (value) => router.replace({ query: value === 'All' ? {} : { area: value } }),
})

const counts = computed(() => {
  const result = { All: projects.value.length } as Record<ProjectCategory | 'All', number>
  for (const c of projectCategories) result[c] = projects.value.filter((p) => p.categories.includes(c)).length
  return result
})

const visible = computed(() =>
  filter.value === 'All'
    ? projects.value
    : projects.value.filter((p) => p.categories.includes(filter.value as ProjectCategory)),
)
</script>

<template>
  <div class="container-site pt-14 pb-24 md:pt-20">
    <header class="mb-10 md:mb-14">
      <p class="eyebrow mb-3">
        <span class="text-accent">{{ String(projects.length).padStart(2, '0') }}</span> / Work
      </p>
      <h1 class="text-[clamp(2.75rem,8vw,5rem)] font-bold">Projects</h1>
      <p class="mt-5 max-w-2xl text-lg text-muted">
        Applied AI across vision, language, speech, and fraud detection — plus the full-stack work that ships
        it.
      </p>
    </header>

    <ProjectFilters v-model="filter" :counts="counts" class="mb-10" />

    <p class="sr-only" aria-live="polite">
      Showing {{ visible.length }} {{ visible.length === 1 ? 'project' : 'projects' }}
    </p>
    <ul class="grid gap-6 md:grid-cols-2">
      <li v-for="(project, i) in visible" :key="project.path">
        <ProjectTile :project="project" heading-level="h2" :eager="i < 2" />
      </li>
    </ul>
  </div>
</template>
