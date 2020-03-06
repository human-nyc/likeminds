import React from 'react'
import PropTypes from 'prop-types'
import client from '../utils/client'
import imageUrlBuilder from '@sanity/image-url'
import ItemsGrid from './ItemsGrid'

const Event = (props) => {
  const {
    date,
    gallery,
    logo,
    _id,
    index,
    place,
    speakers,
    speakerslogo,
    music,
    musiclogo,
    workshops,
    workshopslogo,
    artists,
    artistslogo,
    information,
    informationlogo,
    video,
    website
  } = props

  console.log({props})

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
        logo={speakerslogo}
        items={speakers}
        />
      <ItemsGrid
        title="Music"
        logo={musiclogo}
        items={music}
      />
      <ItemsGrid
        title="Workshops"
        logo={workshopslogo}
        items={workshops}
        />
      <ItemsGrid
        title="Artists"
        logo={artistslogo}
        items={artists}
      /> 
      <ItemsGrid
        title="Information"
        logo={informationlogo}
        items={information}
      /> 
    </div>
  )
  const speakersStr = speakers
    ? speakers.map(({ title }) => title).join(', ')
    : ''
  const musicStr = music
    ? music.map(({ title }) => title).join(', ')
    : ''
  
  const id = index === 1
    ? 'pastLikemind'
    : _id

  const eventLayout = index === 0
    ? (
        <div className='event current'>
          {currentEventItems}
        </div>
      )
    : (
      <div className='event' id={id} >
        <div className='event__header'>
          <div className='event__logo'>
            {eventLogo}
          </div>

          <div className='event__info'>
            <span>{date}<br />{place}</span>
          </div>

          <div className='event__speakers-music'>
            <span>Speakers:</span>
            <span>{speakersStr}</span>
            <span>Music:</span>
            <span>{musicStr}</span>
          </div>

          <div className='event__link'>
            <a
              href={website}
              target='_blank'
            >{`VISIT ${date.slice(date.indexOf('(') + 1, date.indexOf(')'))} WEBSITE`}</a>
            <button onClick={closeGallery}>Close Gallery</button>
          </div>
        </div>

        <div className='event__images' onClick={handleClick}>
          {images}
        </div>
      </div>
    )  


  return (
    <div id={id}>
      {eventLayout}
    </div>
  )
}

Event.propTypes = {
  date: PropTypes.string,
  gallery: PropTypes.array,
  id: PropTypes.string,
  layout: PropTypes.string,
  place: PropTypes.string,
  logo: PropTypes.object,
  music: PropTypes.array,
  musiclogo: PropTypes.object,
  speakers: PropTypes.array,
  speakerslogo: PropTypes.object,
  workshops: PropTypes.array,
  workshopslogo: PropTypes.object,
  artists: PropTypes.array,
  artistslogo: PropTypes.object,
  information: PropTypes.array,
  informationlogo: PropTypes.object,
  video: PropTypes.object,
  website: PropTypes.string
}

export default Event
