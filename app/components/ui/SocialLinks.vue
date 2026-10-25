<script setup lang="ts">
withDefaults(defineProps<{ size?: 'sm' | 'lg' }>(), { size: 'sm' })
const { site } = useAppConfig()
</script>

<template>
  <ul class="flex items-center gap-2">
    <li v-for="s in site.socials" :key="s.label">
      <a
        :href="s.href"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`${site.firstName} on ${s.label}`"
        class="inline-flex items-center justify-center rounded-full border border-line text-body transition-[color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent motion-reduce:hover:translate-y-0"
        :class="size === 'lg' ? 'size-12' : 'size-10'"
      >
        <Icon :name="s.icon" :class="size === 'lg' ? 'size-5' : 'size-4'" />
      </a>
    </li>
  </ul>
</template>
