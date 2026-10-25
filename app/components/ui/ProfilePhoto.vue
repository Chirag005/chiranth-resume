<script setup lang="ts">
/** Photo from app.config, or an intentional monogram card until one is provided. */
const { site } = useAppConfig()
</script>

<template>
  <div class="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-surface">
    <NuxtImg
      v-if="site.photo"
      :src="site.photo"
      :alt="`Portrait of ${site.name}`"
      sizes="(min-width: 1024px) 400px, 90vw"
      class="size-full object-cover"
      preload
    />
    <div
      v-else
      class="chessboard relative flex size-full flex-col items-center justify-center gap-5"
      role="img"
      :aria-label="`${site.name} monogram`"
    >
      <div
        class="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_45%,rgb(45_212_191/0.18),transparent)]"
      />
      <span class="relative text-accent"><KnightMark :size="96" /></span>
      <span class="relative font-display text-4xl font-bold tracking-tight text-ink">{{
        site.initials
      }}</span>
    </div>
  </div>
</template>
