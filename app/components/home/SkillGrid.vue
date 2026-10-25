<script setup lang="ts">
import { skillGroups } from '~/data/profile'
</script>

<template>
  <section class="container-site py-20 md:py-28" aria-labelledby="skills">
    <SectionHeading id="skills" index="05" label="Toolkit" title="Skills" />
    <div
      class="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="(g, i) in skillGroups"
        :key="g.title"
        class="bg-black p-6 md:p-8"
        :class="i === skillGroups.length - 1 && 'md:col-span-2 lg:col-span-1'"
      >
        <h3 class="flex items-center gap-2.5 text-lg font-semibold">
          <Icon :name="g.icon" class="size-4 text-accent" />{{ g.title }}
        </h3>
        <ul class="mt-5 flex flex-wrap gap-2">
          <li v-for="s in g.items" :key="s">
            <Tag>{{ s }}</Tag>
          </li>
        </ul>
      </div>
      <div class="chessboard hidden bg-black lg:block" aria-hidden="true" />
    </div>
  </section>
</template>
