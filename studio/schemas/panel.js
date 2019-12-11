export default {
  title: 'Panel',
  name: 'panel',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'title',
      type: 'string'
    },
    {
      title: 'People',
      name: 'people',
      type: 'array',
      of: [
        { type: 'person' },
        {
          type: 'reference',
          to: [{ type: 'person' }]
        }
      ]
    }
  ]
}