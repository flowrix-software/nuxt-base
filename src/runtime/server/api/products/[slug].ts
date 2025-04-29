import { defineEventHandler, getRouterParam } from 'h3'
// import { useRuntimeConfig } from 'nuxt/app'
import { $fetch } from 'ofetch'

export const productCache = new Map()
// const config = useRuntimeConfig()
export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  if (productCache.has(slug)) {
    return productCache.get(slug)
  }

  const product = await $fetch(`${process.env.NUXT_API_BASE}product/${slug}`, {
    headers: {
      'x-api-key': process.env.NUXT_API_KEY as string,
      'x-api-secret': process.env.NUXT_API_SECRET as string,
      'Origin': process.env.NUXT_API_ORIGIN as string,
    },
  })
  productCache.set(slug, product)
  return product
})
