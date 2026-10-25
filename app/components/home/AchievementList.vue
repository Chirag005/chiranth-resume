<script setup lang="ts">
import { achievements } from '~/data/profile'
</script>

<template>
  <section class="container-site py-20 md:py-28" aria-labelledby="achievements">
    <SectionHeading id="achievements" index="04" label="Competitions" title="Achievements" />
    <ul class="divide-y divide-line border-y border-line">
      <li
        v-for="a in achievements"
        :key="a.event"
        v-reveal
        class="grid items-baseline gap-2 py-6 sm:grid-cols-[9rem_1fr] sm:gap-8 md:py-7"
      >
        <span>
          <Tag :tone="a.highlight ? 'accent' : 'default'">
            <Icon v-if="a.rank === 'Winner'" name="icon-[lucide--trophy]" class="mr-1.5 size-3" />{{ a.rank }}
          </Tag>
        </span>
        <div class="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-8">
          <h3 class="text-lg font-semibold md:text-xl">{{ a.event }}</h3>
          <p class="text-sm text-muted md:text-right">{{ a.host }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>
