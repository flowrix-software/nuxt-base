// import { useRuntimeConfig, useFetch } from 'nuxt/app'

export const useStore = () => {
    const config = useRuntimeConfig()

    const getProducts = async () => {
        const { data } = await useFetch(`${config.public.apiBase}product`, {
            headers: {
                'x-api-key': config.public.apiKey,
                'x-api-secret': config.public.apiSecret,
                'Origin':  config.public.apiOrigin,
            }
        })
        return data.value
    }


    const getProductBySlug = async (slug: string) => {
        const { data } = await $fetch(`${config.public.apiBase}product/${slug}`, {
            headers: {
                'x-api-key': config.public.apiKey,
                'x-api-secret': config.public.apiSecret,
                'Origin':  config.public.apiOrigin,
            },
            key: `product-${slug}`, // Add unique cache key
            server: true,
        })
        return data.value
    }

    return {
        getProducts,
        getProductBySlug
    }
}
