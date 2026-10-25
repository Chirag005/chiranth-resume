<script setup lang="ts">
import { timeline } from '~/data/profile'
</script>

<template>
  <section class="border-y border-line bg-surface/40" aria-labelledby="experience">
    <div class="container-site py-20 md:py-28">
      <SectionHeading id="experience" index="03" label="Path" title="Experience & education" />
      <ol class="relative ml-2 border-l border-line md:ml-0">
        <li
          v-for="entry in timeline"
          :key="entry.title"
          v-reveal
          class="relative pb-14 pl-8 last:pb-0 md:pl-12"
        >
          <span
            class="absolute top-1.5 -left-[0.4rem] size-3 rotate-45 border border-accent"
            :class="entry.kind === 'work' ? 'bg-accent' : 'bg-black'"
            aria-hidden="true"
          />
          <div class="grid gap-3 md:grid-cols-[13rem_1fr] md:gap-10">
            <div>
              <p class="font-mono text-sm text-accent">{{ entry.period }}</p>
              <p class="mt-1 text-sm text-muted">{{ entry.location }}</p>
            </div>
            <div>
              <h3 class="text-xl font-semibold md:text-2xl">{{ entry.title }}</h3>
              <p class="mt-1 font-medium text-body">
                <Icon
                  :name="entry.kind === 'work' ? 'icon-[lucide--briefcase]' : 'icon-[lucide--graduation-cap]'"
                  class="mr-1.5 inline size-4 align-[-0.15em] text-muted"
                />{{ entry.org }}
              </p>
              <ul class="mt-4 space-y-2 text-body">
                <li v-for="p in entry.points" :key="p" class="relative pl-5">
                  <span
                    class="absolute top-[0.7em] left-0 size-1.5 rotate-45 bg-line-strong"
                    aria-hidden="true"
                  />
                  {{ p }}
                </li>
              </ul>
              <ul v-if="entry.stack" class="mt-5 flex flex-wrap gap-2">
                <li v-for="s in entry.stack" :key="s">
                  <Tag>{{ s }}</Tag>
                </li>
              </ul>
              <NuxtLink
                v-if="entry.link"
                :to="entry.link.to"
                class="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
              >
                {{ entry.link.label }} <Icon name="icon-[lucide--arrow-right]" class="size-4" />
              </NuxtLink>
            </div>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
