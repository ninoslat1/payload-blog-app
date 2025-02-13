import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: {
    cookies: {
      secure: process.env.NODE_ENV === 'production',
    },
    tokenExpiration: 1209600,
    verify: false,
    maxLoginAttempts: 5,
    lockTime: 600 * 1000,
  },
  access: {
    read: ({ req }) => req.user?.email === process.env.ADMIN_EMAIL,
    create: ({ req }) => req.user?.email === process.env.ADMIN_EMAIL,
    update: ({ req }) => req.user?.email === process.env.ADMIN_EMAIL,
    delete: () => false,
  },
  fields: [
    {
      name: 'username',
      type: 'text',
      required: true,
      unique: true,
    },
    // Email added by default
    // Add more fields as needed
  ],
}
