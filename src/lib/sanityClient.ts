import { createClient } from "next-sanity";

export const client = createClient({
    apiVersion: '2023-06-02',
    useCdn: false,
    dataset: 'production',
    projectId: 'jvk18f8f',
    token: 'sk1AeSI4xcRff4Xjn6ZYfKoy81JufCeGdQPPk7JRo38MAVoz5Jp6giN6X3W0ioKZmChV2WV10NQm1Yh6uljxoUQzuW0sL6zmdsF2nHzrOae8WkrqJW2YSX4sjuS1SM6D2lmNWkFzIEiCeE9HuDgiFcJ6FimGU6si9vAs0XSf192XcJfref3C'
})
