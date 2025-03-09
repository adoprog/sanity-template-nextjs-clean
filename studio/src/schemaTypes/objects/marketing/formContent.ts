import {defineField, defineType} from 'sanity'
import {EditIcon} from '@sanity/icons'

/**
 * schema object.  Objects are reusable schema structures document.
 * Learn more: https://www.sanity.io/docs/object-type
 */

export const formContent = defineType({
  name: 'formContent',
  title: 'Form',
  type: 'object',
  icon: EditIcon,
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
      name: 'formFields',
      title: 'Form Fields',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'field',
          fields: [
            {
              name: 'type',
              title: 'Field Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Email', value: 'email'},
                  {title: 'Password', value: 'password'},
                  {title: 'Text', value: 'text'},
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'placeholder',
              title: 'Placeholder',
              type: 'string',
            },
            {
              name: 'required',
              title: 'Required',
              type: 'boolean',
              initialValue: false,
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'submitButtonText',
      title: 'Submit Button Text',
      type: 'string',
      initialValue: 'Submit',
    }),
    defineField({
      name: 'additionalText',
      title: 'Additional Text',
      type: 'string',
    }),
    defineField({
      name: 'additionalLinkText',
      title: 'Additional Link Text',
      type: 'string',
    }),
    defineField({
      name: 'additionalLink',
      title: 'Additional Link',
      type: 'reference',
      to: [{type: 'page'}],
    }),
    defineField({
      name: 'image',
      title: 'Form Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image displayed alongside the form',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title || 'Form',
        subtitle: 'Form',
      }
    },
  },
})
