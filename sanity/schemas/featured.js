import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'featured',
    title: 'Featured Menu categories',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: '  Featured category name  ',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'short_description',
            type: 'string',
            title: 'short description',
            validation: (Rule) => Rule.max(200),
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price  of the dish in GBP',
        },
        {
            name: 'restaurantes',
            type: 'array',
            title: 'Restaurantes',
            of: [{ type: 'reference', to: [{ type: 'restaurant' }] }],
        },

    ],
})
