import {defineField, defineType} from 'sanity'
import {DocumentsIcon} from '@sanity/icons'

/**
 * schema object.  Objects are reusable schema structures document.
 * Learn more: https://www.sanity.io/docs/object-type
 */

export const blogCardsContent = defineType({
  name: 'blogCardsContent',
  title: 'Blog Cards',
  type: 'object',
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'posts',
      title: 'Posts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'post' }],
        },
      ],
      validation: (Rule) => Rule.max(4),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      posts: 'posts',
    },
    prepare(selection) {
      const {title, posts = []} = selection
      return {
        title: title || 'Blog Cards',
        subtitle: `${posts.length} post${posts.length === 1 ? '' : 's'}`,
      }
    },
  },
})
