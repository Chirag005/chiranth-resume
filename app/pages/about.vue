<script setup lang="ts">
import { pursuits } from '~/data/profile'

const { site } = useAppConfig()

usePageSeo({
  title: 'About',
  description:
    'About Chiranth Nagendra — Computer Science and Business Systems undergraduate at JSS STU building applied AI systems, hackathon winner, volunteer teacher, and chess player.',
  type: 'profile',
})
</script>

<template>
  <div class="container-site pt-14 pb-24 md:pt-20">
    <div class="grid gap-12 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-20">
      <div class="lg:sticky lg:top-24 lg:self-start">
        <ProfilePhoto class="mx-auto max-w-sm lg:max-w-none" />
        <div class="mt-6 flex items-center justify-between gap-4">
          <p class="flex items-center gap-1.5 text-sm text-muted">
            <Icon name="icon-[lucide--map-pin]" class="size-4" />{{ site.location }}
          </p>
          <SocialLinks />
        </div>
      </div>

      <div>
        <p class="eyebrow mb-3"><span class="text-accent">00</span> / About</p>
        <h1 class="text-[clamp(2.75rem,8vw,5rem)] font-bold">About me</h1>

        <div class="mt-10 max-w-[68ch] space-y-5 text-lg leading-relaxed text-body">
          <p>
            I'm a Computer Science and Business Systems undergraduate at
            <strong class="font-semibold text-ink">JSS Science and Technology University</strong> in Mysore. I
            build applied AI systems across computer vision, natural language processing, speech, and fraud
            detection.
          </p>
          <p>
            My UPI fraud detection system — anomaly detection fused with context analysis and rule-based risk
            scoring —
            <strong class="font-semibold text-ink">won the 8th Mile Hackathon</strong> at RV College of
            Engineering, and I was a finalist in the Vision 2047 National Hackathon. I've also built an
            attention-based image caption generator, a real-time video conversation chatbot, and a
            transformer-based adverse drug reaction classifier.
          </p>
          <p>
            In 2026 I interned at <strong class="font-semibold text-ink">Aragen Life Sciences</strong>,
            building a full-stack HR analytics dashboard in React and FastAPI.
          </p>
        </div>

        <!-- TODO(chiranth): rewrite in your own words — this should echo your statement of purpose. -->
        <section class="mt-16" aria-labelledby="why-research">
          <h2 id="why-research" class="text-[clamp(1.75rem,4vw,2.5rem)] font-bold">Why research</h2>
          <div class="mt-5 max-w-[68ch] space-y-5 text-lg leading-relaxed text-body">
            <p>
              Each project has ended the same way: a working system, and a list of questions I couldn't answer
              with a hackathon timeline. Why does attention make captions better — and does the model actually
              look at what it names? How do you make a fraud score both accurate and explainable?
            </p>
            <p>
              I want to spend the next few years answering questions like these properly, through graduate
              research in AI/ML.
            </p>
          </div>
        </section>

        <section class="mt-16" aria-labelledby="outside">
          <h2 id="outside" class="text-[clamp(1.75rem,4vw,2.5rem)] font-bold">Outside the lab</h2>
          <ul class="mt-6 divide-y divide-line border-y border-line">
            <li v-for="p in pursuits" :key="p.title" class="flex gap-4 py-5">
              <span
                class="flex size-10 shrink-0 items-center justify-center rounded-xl border border-line text-accent"
              >
                <Icon :name="p.icon" class="size-5" />
              </span>
              <div>
                <h3 class="font-semibold">{{ p.title }}</h3>
                <p class="mt-1 text-body">{{ p.description }}</p>
              </div>
            </li>
          </ul>
        </section>

        <section class="mt-16 border-t border-line pt-12" aria-labelledby="get-in-touch">
          <h2 id="get-in-touch" class="text-[clamp(1.75rem,4vw,2.5rem)] font-bold">Get in touch</h2>
          <div class="mt-6"><CopyEmail /></div>
          <div class="mt-8 flex flex-wrap gap-3">
            <PillButton :to="site.cv" icon="icon-[lucide--download]" download>Download CV</PillButton>
            <PillButton to="/projects" variant="ghost">See projects</PillButton>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
