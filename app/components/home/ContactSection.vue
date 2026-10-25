<script setup lang="ts">
const { site } = useAppConfig()
</script>

<template>
  <section id="contact" class="relative overflow-hidden border-t border-line" aria-labelledby="contact-title">
    <div
      class="chessboard pointer-events-none absolute inset-0 [mask-image:radial-gradient(50%_80%_at_50%_100%,#000,transparent)]"
      aria-hidden="true"
    />
    <div class="container-site relative py-24 md:py-36">
      <p class="eyebrow mb-4"><span class="text-accent">07</span> / Contact</p>
      <h2 id="contact-title" class="max-w-3xl text-[clamp(2.5rem,7vw,5rem)] leading-[1] font-bold">
        Let's talk research.
      </h2>
      <p class="mt-6 max-w-xl text-lg text-muted">
        Open to research collaborations, PhD conversations, and internships. Email is the fastest way to reach
        me.
      </p>
      <div class="mt-12"><CopyEmail /></div>
      <div class="mt-10 flex flex-wrap items-center gap-6">
        <SocialLinks size="lg" />
        <PillButton :to="site.cv" variant="ghost" icon="icon-[lucide--download]" download
          >Download CV</PillButton
        >
      </div>
    </div>
  </section>
</template>
