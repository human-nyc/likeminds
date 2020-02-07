import React from 'react'
import PropTypes from 'prop-types'
import client from '../utils/client'
import imageUrlBuilder from '@sanity/image-url'
import ItemsGrid from './ItemsGrid'

const Event = (props) => {
  const { dates, gallery, logo, id, layout, location, speakers, music, workshops, artists, buttonText, buttonLink } = props
  const builder = imageUrlBuilder(client)

  const urlFor = function urlFor(source) {
    return builder.image(source)
  }

  
  const eventLogo = logo ? <img src={urlFor(logo).format('png').url()} /> : ''

  const images = gallery
    ? gallery.map(image => <img key={image._key} src={urlFor(image).url()} alt={image.caption} loading='lazy' />)
    : ''

  const closeGallery = ({ currentTarget }) => {
    const galleryEl = currentTarget.closest('.event')
    galleryEl.classList.remove('is-large-gallery')
  }

  const handleClick = ({ currentTarget, target }) => {
    const galleryEl = currentTarget.closest('.event')

    if (!galleryEl.classList.contains('is-large-gallery')) {
      const galleryHeader = currentTarget.previousElementSibling

      galleryHeader.scrollIntoView()
      galleryEl.classList.add('is-large-gallery')
    }
  }
  const currentEventItems = (
    <div className='currentContainer'>
      <ItemsGrid
        title="Speakers"
        items={speakers}
      />
      <ItemsGrid
        title="Music"
        items={music}
      />
      <ItemsGrid
        title="Workshops"
        items={workshops}
        />
      <ItemsGrid
        title="Artists"
        items={artists}
      />
    </div>
  )
  const speakersStr = speakers
    ? speakers.map(({ title }) => title).join(', ')
    : ''
  const musicStr = music
    ? music.map(({ title }) => title).join(', ')
    : ''
    
  const eventLayout = layout == 'current'
    ? (
        <div className='event current'>
          {currentEventItems}
        </div>
      )
    : (
      <div className='event'>
        <div className='event__header'>
          <div className='event__logo'>
            {eventLogo}
          </div>

          <div className='event__info'>
            <span>{dates}<br />{location}</span>
          </div>

          <div className='event__speakers-music'>
            <span>Speakers:</span>
            <span>{speakersStr}</span>
            <span>Music:</span>
            <span>{musicStr}</span>
          </div>

          <div className='event__link'>
            <a
              href={buttonLink}
              target='_blank'
            >{buttonText}</a>
            <button onClick={closeGallery}>Close Gallery</button>
          </div>
        </div>

        <div className='event__images' onClick={handleClick}>
          {images}
        </div>
      </div>
    )  


  return (
    <div className='event' id={id}>
      {eventLayout}
    </div>
  )
}

Event.propTypes = {
  buttonLink: PropTypes.string,
  buttonText: PropTypes.string,
  dates: PropTypes.string,
  gallery: PropTypes.array,
  id: PropTypes.string,
  layout: PropTypes.string,
  location: PropTypes.string,
  logo: PropTypes.object,
  music: PropTypes.array,
  speakers: PropTypes.array,
  workshops: PropTypes.array,
  artists: PropTypes.array,
}

export default Event
