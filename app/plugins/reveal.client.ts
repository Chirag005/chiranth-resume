/**
 * v-reveal — fades sections in as they scroll into view.
 *
 * Content is rendered visible on the server; only elements that are below the
 * fold at hydration get hidden and then revealed, so there is no flash, no
 * invisible no-JS content, and nothing animates for reduced-motion users.
 */
export default defineNuxtPlugin((nuxtApp) => {
  const observers = new WeakMap<HTMLElement, IntersectionObserver>()

  nuxtApp.vueApp.directive<HTMLElement>('reveal', {
    mounted(el) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      if (el.getBoundingClientRect().top < window.innerHeight) return

      el.classList.add('reveal-pending')
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) return
          el.classList.add('reveal-in')
          el.classList.remove('reveal-pending')
          observer.disconnect()
        },
        { rootMargin: '0px 0px -8% 0px' },
      )
      observer.observe(el)
      observers.set(el, observer)
    },
    unmounted(el) {
      observers.get(el)?.disconnect()
    },
  })
})
