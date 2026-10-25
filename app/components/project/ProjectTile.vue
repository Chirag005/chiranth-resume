<script setup lang="ts">
withDefaults(defineProps<{ project: ProjectSummary; headingLevel?: 'h2' | 'h3'; eager?: boolean }>(), {
  headingLevel: 'h3',
  eager: false,
})
</script>

<template>
  <NuxtLink
    :to="project.path"
    class="group relative block overflow-hidden rounded-2xl border border-line bg-surface transition-[border-color,box-shadow] duration-500 hover:border-line-strong hover:shadow-[0_20px_60px_-20px_rgb(45_212_191/0.25)] focus-visible:border-accent"
  >
    <div class="relative aspect-[16/11] overflow-hidden sm:aspect-[16/10]">
      <ProjectCover
        :variant="project.cover"
        :eager="eager"
        class="size-full transition-transform duration-700 ease-out-expo group-hover:scale-110 group-focus-visible:scale-110 motion-reduce:!scale-100"
      />

      <!-- Skill marquee (decorative: the stack is listed on the case study) -->
      <div
        class="pointer-events-none absolute top-4 left-4 h-8 w-[min(15rem,60%)] overflow-hidden rounded-full border border-white/10 bg-black/75 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
        aria-hidden="true"
      >
        <div class="flex h-full w-max animate-marquee items-center">
          <span
            v-for="(skill, i) in [...project.stack, ...project.stack]"
            :key="i"
            class="px-3 font-mono text-xs whitespace-nowrap text-ink"
          >
            {{ skill }}
          </span>
        </div>
      </div>

      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent from-25% via-black/70 via-65% to-black/95"
        aria-hidden="true"
      />

      <div class="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <p v-if="project.badge" class="mb-2.5">
          <Tag tone="accent">{{ project.badge }}</Tag>
        </p>
        <div class="flex items-end justify-between gap-4">
          <component :is="headingLevel" class="text-xl font-semibold md:text-2xl">{{
            project.title
          }}</component>
          <Icon
            name="icon-[lucide--arrow-up-right]"
            class="mb-1 size-5 shrink-0 text-muted transition-[color,transform] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
            aria-hidden="true"
          />
        </div>
        <div
          class="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out-expo group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr] [@media(hover:none)]:grid-rows-[1fr]"
        >
          <p class="overflow-hidden">
            <span class="block pt-2 text-[0.9375rem] leading-relaxed text-body">{{ project.summary }}</span>
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
