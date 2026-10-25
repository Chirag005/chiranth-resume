<script setup lang="ts">
const route = useRoute()
// Normalise so `/projects/x/` and `/projects/x` resolve identically on every host.
const path = route.path.replace(/\/+$/, '')

const { data: project } = await useAsyncData(`project-${path}`, () =>
  queryCollection('projects').path(path).first(),
)

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })
}

const { data: projects } = await useProjects()
const { site } = useAppConfig()

const next = computed(() => {
  const list = projects.value
  const index = list.findIndex((p) => p.path === path)
  return list[(index + 1) % list.length]
})

usePageSeo({ title: project.value.title, description: project.value.description, type: 'article' })

useSchemaOrg([
  defineWebPage({ '@type': 'ItemPage' }),
  {
    '@type': 'CreativeWork',
    name: project.value.title,
    description: project.value.description,
    author: { '@id': '#identity' },
    keywords: project.value.stack.join(', '),
  },
])
</script>

<template>
  <article v-if="project" class="container-site">
    <CaseStudyHeader :project="project" />

    <div class="mt-12 overflow-hidden rounded-2xl border border-line">
      <ProjectCover :variant="project.cover" eager class="aspect-[16/9] w-full lg:aspect-[21/9]" />
    </div>

    <div class="grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-16">
      <ContentRenderer :value="project" class="prose-case mt-2" />

      <aside class="lg:pt-14" aria-label="Project details">
        <div class="space-y-10 lg:sticky lg:top-24">
          <section>
            <h2 class="eyebrow mb-4 font-normal">Tech</h2>
            <ul class="flex flex-wrap gap-2">
              <li v-for="t in project.stack" :key="t">
                <Tag>{{ t }}</Tag>
              </li>
            </ul>
          </section>
          <section>
            <h2 class="eyebrow mb-4 font-normal">Links</h2>
            <ul class="space-y-3">
              <li v-for="l in project.links ?? []" :key="l.href">
                <a
                  :href="l.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-ink transition-colors hover:text-accent"
                >
                  {{ l.label }} <Icon name="icon-[lucide--arrow-up-right]" class="size-4" />
                </a>
              </li>
              <li>
                <a
                  :href="site.socials[0]!.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-ink transition-colors hover:text-accent"
                >
                  <Icon name="icon-[simple-icons--github]" class="size-4" /> More on GitHub
                  <Icon name="icon-[lucide--arrow-up-right]" class="size-4" />
                </a>
              </li>
            </ul>
          </section>
        </div>
      </aside>
    </div>

    <NextMoveButton v-if="next" :to="next.path" :title="next.title" />
  </article>
</template>
