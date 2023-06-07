import { defineField ,defineType } from "sanity"
export const product = defineType ({
        name: 'product', //json
        type: 'document',
        title: 'Product', // Sanity document title
        fields: [
            {
                name: 'title', //works as id in json
                title: 'Title', //Sanity filed title
                type: 'string'
            },
            {
                name: 'description', //works as id in json
                title: 'Product Description', //Sanity filed title
                type: 'string'
            },
            defineField({
                name: 'image', //works as id in json
                title: 'Product Image', //Sanity filed title
                type: 'array',
                of: [{
                    name : 'img',
                    title: 'Image',
                    type :'image'
                }],
            }),
            defineField({
                name: 'category', //works as id in json
                title: 'Product Category', //Sanity filed title
                type: 'reference',
                to: [{
                    type: 'category'
                    
                }],
            }),
        ]

    }
    
)
