import {defineField, defineType} from 'sanity'
import {TagIcon} from '@sanity/icons'

/**
 * schema object.  Objects are reusable schema structures document.
 * Learn more: https://www.sanity.io/docs/object-type
 */

export const pricingContent = defineType({
  name: 'pricingContent',
  title: 'Pricing',
  type: 'object',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'plans',
      title: 'Pricing Plans',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'plan',
          fields: [
            {
              name: 'name',
              title: 'Plan Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'price',
              title: 'Price',
              type: 'number',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'currency',
              title: 'Currency',
              type: 'string',
              initialValue: '$',
            },
            {
              name: 'billingPeriod',
              title: 'Billing Period',
              type: 'string',
              initialValue: '/month',
            },
            {
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              initialValue: 'Get Started',
            },
            {
              name: 'buttonLink',
              title: 'Button Link',
              type: 'reference',
              to: [{type: 'page'}],
            },
            {
              name: 'features',
              title: 'Features',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'feature',
                  fields: [
                    {
                      name: 'text',
                      title: 'Feature Text',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'included',
                      title: 'Included',
                      type: 'boolean',
                      initialValue: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      plans: 'plans',
    },
    prepare(selection) {
      const {plans = []} = selection
      return {
        title: 'Pricing',
        subtitle: `${plans.length} plan${plans.length === 1 ? '' : 's'}`,
      }
    },
  },
})
