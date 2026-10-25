// Server-side no-op so `v-reveal` resolves during SSR / prerender.
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', { getSSRProps: () => ({}) })
})
