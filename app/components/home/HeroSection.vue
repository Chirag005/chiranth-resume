<script setup lang="ts">
const { site } = useAppConfig()
</script>

<template>
  <section class="relative overflow-hidden border-b border-line" aria-labelledby="hero-title">
    <div
      class="chessboard pointer-events-none absolute inset-0 [mask-image:radial-gradient(55%_70%_at_85%_30%,#000_10%,transparent_70%)]"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_30rem_at_85%_0%,rgb(45_212_191/0.12),transparent_70%)]"
      aria-hidden="true"
    />
    <div class="container-site relative flex min-h-[calc(88svh-4rem)] flex-col justify-center py-20 md:py-28">
      <p class="eyebrow mb-6 flex items-center gap-2.5">
        <span class="relative flex size-2">
          <span
            class="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden"
          />
          <span class="relative inline-flex size-2 rounded-full bg-accent" />
        </span>
        {{ site.affiliation }}
      </p>
      <h1
        id="hero-title"
        class="text-[clamp(3rem,9.5vw,7.5rem)] leading-[0.95] font-bold tracking-[-0.035em]"
      >
        Hi, I'm {{ site.firstName }}.
      </h1>
      <p class="mt-8 max-w-[42rem] text-lg leading-relaxed text-body md:text-[1.375rem] md:leading-relaxed">
        {{ site.tagline }}
      </p>
      <div class="mt-12 flex flex-wrap items-center gap-3">
        <PillButton to="/projects">View projects</PillButton>
        <PillButton :to="site.cv" variant="ghost" icon="icon-[lucide--download]" download
          >Download CV</PillButton
        >
        <NuxtLink
          to="/#contact"
          class="ml-2 inline-flex h-12 items-center text-[0.9375rem] font-medium text-body underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          Contact
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
