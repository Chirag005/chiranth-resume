<script setup lang="ts">
const { site } = useAppConfig()

usePageSeo({
  title: `${site.name} — Applied AI`,
  description: site.tagline,
  type: 'profile',
})

// Home title stands alone, without the "| Chiranth Nagendra" suffix.
useHead({ titleTemplate: '%s' })
</script>

<template>
  <div>
    <HeroSection />
    <HighlightStrip />
    <!--
      Below-the-fold sections are fully server-rendered but hydrate only when they
      scroll into view; purely presentational ones never hydrate. Hover effects are
      CSS-only and links work as plain anchors until hydration, so nothing is lost.
    -->
    <LazyResearchInterests hydrate-on-visible />
    <LazyFeaturedProjects hydrate-on-visible />
    <LazyExperienceTimeline hydrate-on-visible />
    <LazyAchievementList hydrate-never />
    <LazySkillGrid hydrate-never />
    <LazyKnightDivider hydrate-never />
    <LazyBeyondCode hydrate-never />
    <LazyContactSection hydrate-on-visible />
  </div>
</template>
