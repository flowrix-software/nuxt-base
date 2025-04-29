import { defineEventHandler } from 'h3'
import { productCache } from './[slug]'

export default defineEventHandler(() => {
  return {
    cacheSize: productCache.size,
    cachedProducts: Array.from(productCache.entries()).map(([slug, product]) => ({
      slug,
      product,
    })),
  }
})
