<script setup lang="ts">
/** Original pixel-art chess knight, rendered from a bitmap as crisp SVG runs. */
withDefaults(defineProps<{ size?: number | string; title?: string }>(), { size: 24, title: undefined })

const bitmap = [
  '....#.#.....',
  '....#####...',
  '...#######..',
  '..##.######.',
  '.##########.',
  '###########.',
  '####..#####.',
  '.##..######.',
  '.....######.',
  '....#######.',
  '...########.',
  '..##########',
  '.###########',
  '############',
]

// Merge horizontal runs into single rects to keep the DOM small.
const runs = bitmap.flatMap((row, y) => {
  const out: { x: number; y: number; w: number }[] = []
  let start = -1
  for (let x = 0; x <= row.length; x++) {
    const filled = row[x] === '#'
    if (filled && start < 0) start = x
    if (!filled && start >= 0) {
      out.push({ x: start, y, w: x - start })
      start = -1
    }
  }
  return out
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="-1 -1 14 16"
    shape-rendering="crispEdges"
    fill="currentColor"
    :role="title ? 'img' : undefined"
    :aria-hidden="title ? undefined : 'true'"
    :aria-label="title"
  >
    <rect v-for="(r, i) in runs" :key="i" :x="r.x" :y="r.y" :width="r.w" height="1" />
  </svg>
</template>
