<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const is404 = computed(() => props.error.statusCode === 404)

useSeoMeta({
  title: is404.value ? 'Checkmate — page not found' : 'Something went wrong',
  robots: 'noindex',
})
</script>

<template>
  <NuxtLayout>
    <section class="relative overflow-hidden">
      <div
        class="chessboard pointer-events-none absolute inset-0 [mask-image:radial-gradient(55%_65%_at_80%_40%,#000,transparent)]"
        aria-hidden="true"
      />
      <div class="container-site relative flex min-h-[70svh] flex-col items-start justify-center py-24">
        <p class="eyebrow mb-4">
          <span class="text-accent">{{ error.statusCode }}</span> / {{ is404 ? 'Page not found' : 'Error' }}
        </p>
        <h1 class="text-[clamp(3rem,10vw,7rem)] font-bold">{{ is404 ? 'Checkmate.' : 'Stalemate.' }}</h1>
        <p class="mt-6 max-w-xl text-lg text-muted">
          {{
            is404
              ? "This square is empty — the page you're looking for doesn't exist or has moved."
              : 'Something unexpected happened on our side. Try again in a moment.'
          }}
        </p>
        <div class="mt-10 flex flex-wrap gap-3">
          <PillButton to="/" icon="icon-[lucide--arrow-left]" @click="clearError({ redirect: '/' })"
            >Back to home</PillButton
          >
          <PillButton to="/projects" variant="ghost">See projects</PillButton>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
