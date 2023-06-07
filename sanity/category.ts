import { defineField ,defineType } from "sanity"

export const category = defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    
    fields: [
        defineField({
            name: 'name',
            title: 'Product Category',
            type: 'string',
            options: {
                list:['Male', 'Female', 'Kids']
            }
        })
    ]

})