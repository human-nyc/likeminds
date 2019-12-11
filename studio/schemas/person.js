export default {
  title: "Speaker",
  name: "person",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "title",
      type: "string",
      description: 'Please use "Firstname Lastname" format'
    },
    {
      title: 'Avatar',
      name: 'avatar',
      type: 'image'
    },
    {
      title: 'Blurb',
      name: 'blurb',
      type: 'text'
    },
    {
      title: 'Website',
      name: 'website',
      type: 'url'
    }
  ]
}
