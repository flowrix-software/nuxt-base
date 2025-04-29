import { defineNuxtModule, addServerScanDir, addImportsDir, createResolver } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  apiKey: string
  apiSecret: string
  apiOrigin: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-base',
    configKey: 'myModule',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    // addPlugin(resolver.resolve('./runtime/plugin'))
    addImportsDir(resolver.resolve('composables'))
    addServerScanDir(resolver.resolve('./runtime/server'))
  },
})
