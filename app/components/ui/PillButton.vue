<script setup lang="ts">
/**
 * Pill CTA. Internal links use <NuxtLink>; external/download links get the right attributes.
 * The primary variant inverts on hover and slides a double arrow vertically.
 */
const props = withDefaults(
  defineProps<{
    to: string
    variant?: 'primary' | 'ghost'
    icon?: string
    download?: boolean
    external?: boolean
  }>(),
  { variant: 'primary', icon: 'icon-[lucide--arrow-right]', download: false, external: false },
)

const isExternal = computed(() => props.external || /^https?:|^mailto:/.test(props.to))
</script>

<template>
  <NuxtLink
    :to="to"
    :external="isExternal || download"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    :download="download || undefined"
    class="group inline-flex h-12 items-center gap-2.5 rounded-full border px-6 text-[0.9375rem] font-semibold transition-[background-color,color,border-color,transform] duration-300 ease-out-expo hover:-translate-y-px motion-reduce:hover:translate-y-0"
    :class="
      variant === 'primary'
        ? 'border-white bg-white text-black hover:bg-black hover:text-white'
        : 'border-line-strong text-ink hover:border-accent hover:text-accent'
    "
  >
    <slot />
    <span class="relative inline-block size-4 overflow-hidden" aria-hidden="true">
      <Icon
        :name="icon"
        class="absolute inset-0 size-4 transition-transform duration-500 ease-out-expo group-hover:-translate-y-full"
      />
      <Icon
        :name="icon"
        class="absolute inset-0 size-4 translate-y-full transition-transform duration-500 ease-out-expo group-hover:translate-y-0"
      />
    </span>
  </NuxtLink>
</template>
