import { defineEventHandler, getRouterParam } from 'h3'
import { useRuntimeConfig } from 'nuxt/app'

export const productCache = new Map()
const config = useRuntimeConfig()
export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  if (productCache.has(slug)) {
    return productCache.get(slug)
  }
  
  const product = await $fetch(`${config.public.apiBase}product/${slug}`, {
    headers: {
        'x-api-key': config.public.apiKey,
        'x-api-secret':  config.public.apiSecret,
        'Origin': config.public.apiOrigin,
    }
})
  productCache.set(slug, product)
  return product
})
