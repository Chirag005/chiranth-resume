<script setup lang="ts">
/** Rotating circular "NEXT MOVE" link that chains the case studies. */
defineProps<{ to: string; title: string }>()
const uid = useId()
</script>

<template>
  <section class="flex flex-col items-center py-20 md:py-28" aria-label="Next project">
    <NuxtLink :to="to" class="group relative block size-44 md:size-52" :aria-label="`Next project: ${title}`">
      <svg
        viewBox="0 0 200 200"
        class="size-full transition-transform duration-700 ease-out-expo group-hover:scale-90 group-hover:rotate-[360deg] group-focus-visible:scale-90 motion-reduce:!transform-none"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="98" fill="#0d0d0d" stroke="#2a2a2a" />
        <path :id="`${uid}-ring`" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" fill="none" />
        <text class="fill-ink font-mono text-[14px]" textLength="462" lengthAdjust="spacing">
          <textPath :href="`#${uid}-ring`" startOffset="0">NEXT MOVE ► NEXT MOVE ► NEXT MOVE ►</textPath>
        </text>
      </svg>
      <span
        class="absolute inset-0 flex items-center justify-center text-accent transition-transform duration-500 group-hover:-translate-y-1"
      >
        <KnightMark :size="44" />
      </span>
    </NuxtLink>
    <p class="mt-6 text-center text-muted">
      Next: <span class="font-medium text-ink">{{ title }}</span>
    </p>
  </section>
</template>
