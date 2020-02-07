export default {
  title: 'Event',
  name: 'event',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'text',
      description: 'The title is a number'
    },
    {
      title: 'Theme',
      name: 'theme',
      type: 'text'
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true
          }
        }
      ]
    },
    {
      title: 'Date',
      name: 'date',
      type: 'text'
    },
    {
      title: 'Place',
      name: 'place',
      type: 'text'
    },
    {
      title: 'Website',
      name: 'website',
      type: 'url'
    },
    {
      title: 'Speakers',
      name: 'speakers',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'person' },
            { type: 'panel' }
          ]
        }
      ]
    },
    {
      title: 'Speakers Logo',
      name: 'speakerslogo',
      type: 'image'
    },
    {
      title: 'Music',
      name: 'music',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'performer' }
          ]
        }
      ]
    },
    {
      title: 'Music Logo',
      name: 'musiclogo',
      type: 'image'
    },
    {
      title: 'Workshops',
      name: 'workshops',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'workshopper' }
          ]
        }
      ]
    },
    {
      title: 'Workshops Logo',
      name: 'workshopslogo',
      type: 'image'
    },
    {
      title: 'Gallery',
      name: 'gallery',
      type: 'array',
      of: [
        {
          title: 'Image',
          name: 'image',
          type: 'image',
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              options: {
                isHighlighted: true
              }
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
    /* prepare({ title }) {
      console.log(title);

      return {
        title: title
      }
    } */
  }
}