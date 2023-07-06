const {createClient} = require('@sanity/client')

export const client = createClient({
    apiVersion: '2023-06-02',
    useCdn: false,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.SANITY_PROJECT_ID,
    token: process.env.NEXT_PUBLIC_SANITY_ACCESS_TOKEN
})
