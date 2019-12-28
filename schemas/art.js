export default {
  name: 'art',
  title: 'Art',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      required: true
    },
    {
      name: 'imagery',
      title: 'Imagery',
      type: 'image',
      required: true,
      option: {
        hotspot: true
      }
    },
    {
      name: 'artist',
      title: 'Artist',
      type: 'reference',
      to: { type: 'artist' }
    },
    {
      name: 'createdAt',
      title: 'Created at',
      type: 'datetime'
    }
  ]
 }