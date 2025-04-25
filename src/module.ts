import { defineNuxtModule, addImportsDir, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'nuxt-base',
    configKey: 'ecommerce'
  },
  setup(_options, nuxt) {
    const resolver = createResolver(import.meta.url)
    addImportsDir(resolver.resolve('composables'))
  }
})
