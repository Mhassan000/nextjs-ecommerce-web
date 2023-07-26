const {createClient} = require('@sanity/client')

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    token: process.env.NEXT_PUBLIC_SANITY_ACCESS_TOKEN,
    apiVersion: '2023-06-02',
    useCdn: false
})
