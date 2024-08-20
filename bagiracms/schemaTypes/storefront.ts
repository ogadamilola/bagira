import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'storefront',
  title: 'Storefront',
  type: 'document',
  fields: [
    defineField({
      name: 'artwork',
      title: 'Artwork',
      type: 'reference',
      to: {type: 'artwork'},
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
  ],

  preview: {
    select: {
      title: 'artwork.title',
      artwork: 'artwork.name',
      media: 'artwork.image',
    },
    prepare(selection) {
      const {artwork} = selection
      return {...selection, subtitle: artwork && `by ${artwork}`}
    },
  },
})
