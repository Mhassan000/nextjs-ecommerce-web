import { defineField ,defineType } from "sanity"
export const product = defineType ({
        name: 'product', //json
        type: 'document',
        title: 'Product', // Sanity document title
        fields: [
            defineField({
                name: 'name', //works as id in json
                title: 'Title', //Sanity filed title
                type: 'string'
            }),
            defineField({
                name: 'ptype',
                title: 'Product Type',
                type: 'string'
            }),

            defineField({
                name: 'description', //works as id in json
                title: 'Product Description', //Sanity filed title
                type: 'string'
            }),
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
                name: 'price',
                title: 'Product Price',
                type: 'number'
            }),
            defineField({
                name: 'category', //works as id in json
                title: 'Product Category', //Sanity filed title
                type: 'reference',
                to: [{
                    type: 'category'
                    
                }],
            }),
            defineField({
                name:'slug',
                title:'Slug',
                type: 'slug',
                options: {
                    source: 'name',
                    maxLength: 90,
                }
            })
        ]

    }
    
)
