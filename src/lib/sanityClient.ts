const {createClient} = require('@sanity/client')

export const client = createClient({
    projectId: 'jvk18f8f',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.NEXT_PUBLIC_SANITY_ACCESS_TOKEN,
    apiVersion: '2023-06-02',
    useCdn: false
})
