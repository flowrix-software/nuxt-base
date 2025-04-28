import { productCache } from './[slug]'
import { defineEventHandler } from 'h3'

export default defineEventHandler((event) => {
  return {
    cacheSize: productCache.size,
    cachedProducts: Array.from(productCache.entries()).map(([slug, product]) => ({
      slug,
      product
    }))
  }
}) 