<script setup lang="ts">
import { pursuits } from '~/data/profile'
</script>

<template>
  <section class="container-site pt-4 pb-20 md:pb-28" aria-labelledby="beyond">
    <SectionHeading id="beyond" index="06" label="Off the clock" title="Beyond code" />
    <ul class="grid gap-4 md:grid-cols-3">
      <li v-for="p in pursuits" :key="p.title" v-reveal class="rounded-2xl border border-line p-6 md:p-8">
        <Icon :name="p.icon" class="size-6 text-accent" />
        <h3 class="mt-6 text-xl font-semibold">{{ p.title }}</h3>
        <p class="mt-2 text-body">{{ p.description }}</p>
      </li>
    </ul>
  </section>
</template>
