import { defineEventHandler, getRouterParam } from 'h3'

import { $fetch } from 'ofetch'

export const Page = new Map()
export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  if (Page.has(slug)) {
    return Page.get(slug)
  }

  const page = await $fetch(`${process.env.NUXT_API_BASE}page/${slug}`, {
    headers: {
      'x-api-key': process.env.NUXT_API_KEY as string,
      'x-api-secret': process.env.NUXT_API_SECRET as string,
      'Origin': process.env.NUXT_API_ORIGIN as string,
    },
  })
  Page.set(slug, page)
  return page
})
