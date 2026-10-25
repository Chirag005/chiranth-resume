<script setup lang="ts">
import { projectCategories, type ProjectCategory } from '#shared/utils/projects'

defineProps<{ counts: Record<ProjectCategory | 'All', number> }>()
const model = defineModel<ProjectCategory | 'All'>({ required: true })
const options = ['All', ...projectCategories] as const
</script>

<template>
  <div role="group" aria-label="Filter projects by area" class="flex flex-wrap gap-2">
    <button
      v-for="option in options"
      :key="option"
      type="button"
      :aria-pressed="model === option"
      :disabled="counts[option] === 0"
      class="inline-flex h-10 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40"
      :class="
        model === option
          ? 'border-accent bg-accent-soft text-accent'
          : 'border-line text-body hover:border-line-strong hover:text-ink'
      "
      @click="model = option"
    >
      {{ option }}
      <span class="font-mono text-xs text-muted">{{ counts[option] }}</span>
    </button>
  </div>
</template>
