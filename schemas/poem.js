export default {
  name: 'poem',
  title: 'Poem',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => [
        Rule.required().error('A title is required')
      ]
    },
    {
      name: 'cycle',
      title: 'Cycle',
      type: 'reference',
      to: { type: 'cycle' },
      validation: Rule => [
        Rule.required().error('A cycle is required.'),
      ]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ]
 }