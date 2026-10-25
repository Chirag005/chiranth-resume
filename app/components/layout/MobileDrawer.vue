<script setup lang="ts">
const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ close: [] }>()

const { site } = useAppConfig()
const panel = useTemplateRef<HTMLElement>('panel')
const isLocked = useScrollLock(import.meta.client ? document.body : null)

const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

function focusables(): HTMLElement[] {
  return panel.value ? Array.from(panel.value.querySelectorAll<HTMLElement>(focusableSelector)) : []
}

/** Keep keyboard focus inside the drawer while it is open. */
function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    event.preventDefault()
    emit('close')
    return
  }
  if (event.key !== 'Tab') return
  const items = focusables()
  const first = items[0]
  const last = items.at(-1)
  if (!first || !last) return
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

watch(
  () => props.open,
  async (open) => {
    isLocked.value = open
    if (open) {
      await nextTick()
      focusables()[0]?.focus()
    }
  },
)

const mq = useMediaQuery('(min-width: 768px)')
watch(mq, (desktop) => desktop && props.open && emit('close'))
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
        @click="emit('close')"
      />
    </Transition>
    <Transition
      enter-active-class="transition-transform duration-400 ease-out-expo"
      leave-active-class="transition-transform duration-250 ease-in"
      enter-from-class="translate-x-full"
      leave-to-class="translate-x-full"
    >
      <div
        v-if="open"
        id="mobile-drawer"
        ref="panel"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        class="fixed inset-y-0 right-0 z-50 flex w-[min(20rem,86vw)] flex-col border-l border-line bg-surface px-6 pt-5 pb-8 md:hidden"
        @keydown="onKeydown"
      >
        <div class="flex justify-end">
          <button
            type="button"
            class="inline-flex size-11 items-center justify-center rounded-full text-ink transition-transform duration-300 hover:rotate-90"
            aria-label="Close menu"
            @click="emit('close')"
          >
            <Icon name="icon-[lucide--x]" class="size-6" />
          </button>
        </div>
        <ul class="mt-6 flex flex-col">
          <li
            v-for="item in [{ label: 'Home', to: '/' }, ...navItems]"
            :key="item.to"
            class="border-b border-line"
          >
            <NuxtLink
              :to="item.to"
              class="block py-4 font-display text-2xl font-semibold text-ink transition-[padding,color] hover:pl-2 hover:text-accent"
              exact-active-class="text-accent"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
          <li class="border-b border-line">
            <a
              :href="site.cv"
              download
              class="flex items-center justify-between py-4 font-display text-2xl font-semibold text-ink transition-[padding,color] hover:pl-2 hover:text-accent"
            >
              Download CV <Icon name="icon-[lucide--download]" class="size-5" />
            </a>
          </li>
        </ul>
        <div class="mt-auto flex items-center justify-between pt-8">
          <SocialLinks />
          <span class="text-accent/60"><KnightMark :size="28" /></span>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
