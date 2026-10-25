<script setup lang="ts">
/** Architecture pipeline rendered from Markdown (MDC) props as an accessible ordered list. */
defineProps<{ steps: { title: string; detail?: string }[] }>()
</script>

<template>
  <figure class="not-prose my-8 rounded-2xl border border-line bg-surface p-5 md:p-7">
    <figcaption class="eyebrow mb-5">System pipeline</figcaption>
    <ol class="relative grid gap-3">
      <li
        v-for="(step, i) in steps"
        :key="step.title"
        class="relative grid grid-cols-[2.25rem_1fr] items-start gap-4"
      >
        <span
          v-if="i < steps.length - 1"
          class="absolute top-9 bottom-[-0.75rem] left-[1.075rem] w-px bg-gradient-to-b from-accent/60 to-line"
          aria-hidden="true"
        />
        <span
          class="relative z-10 flex size-9 items-center justify-center rounded-lg border font-mono text-xs"
          :class="
            i === 0 || i === steps.length - 1
              ? 'border-accent/50 bg-accent-soft text-accent'
              : 'border-line-strong bg-black text-body'
          "
        >
          {{ String(i + 1).padStart(2, '0') }}
        </span>
        <div class="min-h-9 pt-1.5 pb-2">
          <p class="m-0 leading-snug font-semibold text-ink">{{ step.title }}</p>
          <p v-if="step.detail" class="m-0 mt-0.5 text-[0.9375rem] leading-snug text-muted">
            {{ step.detail }}
          </p>
        </div>
      </li>
    </ol>
  </figure>
</template>
