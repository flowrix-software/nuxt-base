import { useRuntimeConfig } from 'nuxt/app'
import { defineEventHandler, getRouterParam } from 'h3'
export const Page = new Map()
const config = useRuntimeConfig()
export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  if (Page.has(slug)) {
    return Page.get(slug)
  }
  
  const page = await $fetch(`${config.public.apiBase}page/${slug}`, {
    headers: {
        'x-api-key': config.public.apiKey,
        'x-api-secret':  config.public.apiSecret,
        'Origin': config.public.apiOrigin,
    }
})
  Page.set(slug, page)
  return page
})
