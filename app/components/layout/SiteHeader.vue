<script setup lang="ts">
const { site } = useAppConfig()
const menuOpen = ref(false)
const menuButton = useTemplateRef<HTMLButtonElement>('menuButton')

function closeMenu({ restoreFocus = true } = {}) {
  menuOpen.value = false
  if (restoreFocus) nextTick(() => menuButton.value?.focus())
}

const route = useRoute()
watch(
  () => route.fullPath,
  () => closeMenu({ restoreFocus: false }),
)
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-line/70 bg-black/75 backdrop-blur-xl backdrop-saturate-150"
  >
    <nav class="container-site flex h-16 items-center justify-between" aria-label="Primary">
      <NuxtLink to="/" class="group flex items-center gap-3 text-ink" :aria-label="`${site.name} — home`">
        <span
          class="text-accent transition-transform duration-500 ease-out-expo group-hover:-translate-y-1 motion-reduce:transform-none"
        >
          <KnightMark :size="26" />
        </span>
        <span class="font-display text-[1.0625rem] font-semibold tracking-tight">{{ site.name }}</span>
      </NuxtLink>

      <ul class="hidden items-center gap-8 md:flex">
        <li v-for="item in navItems" :key="item.to">
          <NuxtLink
            :to="item.to"
            class="relative text-[0.9375rem] text-body transition-colors hover:text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100"
            active-class="!text-ink after:!scale-x-100"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
        <li>
          <a
            :href="site.cv"
            download
            class="inline-flex h-9 items-center gap-2 rounded-full border border-line-strong px-4 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <Icon name="icon-[lucide--download]" class="size-3.5" />
            CV
          </a>
        </li>
      </ul>

      <button
        ref="menuButton"
        type="button"
        class="relative -mr-2 inline-flex size-11 items-center justify-center md:hidden"
        :aria-expanded="menuOpen"
        aria-controls="mobile-drawer"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        @click="menuOpen ? closeMenu() : (menuOpen = true)"
      >
        <span class="relative block h-3.5 w-6" aria-hidden="true">
          <span
            class="absolute top-0 left-0 h-0.5 w-6 rounded bg-ink transition-transform duration-300"
            :class="menuOpen && 'translate-y-1.5 rotate-45'"
          />
          <span
            class="absolute top-1.5 left-0 h-0.5 w-6 rounded bg-ink transition-opacity duration-200"
            :class="menuOpen && 'opacity-0'"
          />
          <span
            class="absolute top-3 left-0 h-0.5 w-6 rounded bg-ink transition-transform duration-300"
            :class="menuOpen && '-translate-y-1.5 -rotate-45'"
          />
        </span>
      </button>
    </nav>

    <MobileDrawer :open="menuOpen" @close="closeMenu()" />
  </header>
</template>
