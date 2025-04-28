import { defineNuxtModule, addImportsDir, createResolver, addServerScanDir } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'nuxt-base',
    configKey: 'ecommerce'
  },
  setup(_options, nuxt) {
    const resolver = createResolver(import.meta.url)
    
    // Add composables directory
    addImportsDir(resolver.resolve('composables'))
    // Add a server route
    addServerScanDir(resolver.resolve('server'))
  }
})
