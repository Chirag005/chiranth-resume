<script setup lang="ts">
const { site } = useAppConfig()
const { copy, copied, isSupported } = useClipboard({ copiedDuring: 1600, legacy: true })
</script>

<template>
  <div class="inline-flex flex-wrap items-center gap-3">
    <a
      :href="`mailto:${site.email}`"
      class="font-display text-[clamp(1.05rem,4.4vw,2rem)] font-semibold text-ink underline decoration-line-strong decoration-2 underline-offset-8 transition-colors hover:text-accent hover:decoration-accent"
    >
      {{ site.email }}
    </a>
    <button
      v-if="isSupported"
      type="button"
      class="relative inline-flex size-11 items-center justify-center rounded-full border border-line-strong text-body transition-colors hover:border-accent hover:text-accent"
      :aria-label="copied ? 'Email copied' : 'Copy email address'"
      @click="copy(site.email)"
    >
      <Icon :name="copied ? 'icon-[lucide--check]' : 'icon-[lucide--copy]'" class="size-4" />
      <span
        class="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded-md bg-surface-2 px-2.5 py-1.5 font-mono text-xs whitespace-nowrap text-ink shadow-lg transition-all duration-200"
        :class="copied ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'"
        aria-hidden="true"
      >
        Copied!
      </span>
    </button>
    <span class="sr-only" aria-live="polite">{{ copied ? 'Email address copied to clipboard' : '' }}</span>
  </div>
</template>
