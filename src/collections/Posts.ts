import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  timestamps: true,
  auth: false,
  admin: {
    listSearchableFields: ['title', 'author'],
    pagination: {
      defaultLimit: 10,
      limits: [10, 20, 50],
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'author',
      type: 'text',
      required: true,
      admin: {
        readOnly: true,
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ req, data }) => {
        return {
          ...data,
          author: req.user && req.user.username,
        }
      },
    ],
  },
}
