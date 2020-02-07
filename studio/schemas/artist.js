export default {
  title: "Artist",
  name: "artist",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "title",
      type: "string"
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
