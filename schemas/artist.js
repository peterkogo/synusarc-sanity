export default {
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      required: true
    },
    {
      name: 'profession',
      title: 'Profession',
      type: 'string',
      required: true
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      required: true
    },
    {
      name: 'webiste',
      title: 'Website',
      type: 'url'
    }
  ]
 }