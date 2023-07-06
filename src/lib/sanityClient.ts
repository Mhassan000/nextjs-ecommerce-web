import { createClient } from "next-sanity";

export const client = createClient({
    apiVersion: '2023-06-02',
    useCdn: false,
    dataset: 'production',
    projectId: 'jvk18f8f',
    token: process.env.SANITY_ACCESS_TOKEN
})
