// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'error',
    // Match Prettier's output for void elements (<img />).
    'vue/html-self-closing': ['warn', { html: { void: 'always', normal: 'always', component: 'always' } }],
  },
})
