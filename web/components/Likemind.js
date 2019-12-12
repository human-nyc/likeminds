import React from 'react'
import PropTypes from 'prop-types'
import client from '../utils/client'
import imageUrlBuilder from '@sanity/image-url'

const Likemind = (props) => {
  const { dates, gallery, logo, id, location, speakers, music, buttonText, buttonLink } = props
  const builder = imageUrlBuilder(client)

  const urlFor = function urlFor(source) {
    return builder.image(source)
  }

  const likemindLogo = logo ? <img src={urlFor(logo).format('png').url()} /> : ''

  const images = gallery
    ? gallery.map(image => <img key={image._key} src={urlFor(image).url()} alt={image.caption} loading="lazy" />)
    : ''

  const closeGallery = ({ currentTarget }) => {
    const galleryEl = currentTarget.closest('.likemind')

    galleryEl.classList.remove('is-large-gallery')
  }

  const handleClick = ({ currentTarget, target }) => {
    const galleryEl = currentTarget.closest('.likemind')

    if (!galleryEl.classList.contains('is-large-gallery')) {
      const galleryHeader = currentTarget.previousElementSibling

      galleryHeader.scrollIntoView()
      galleryEl.classList.add('is-large-gallery')
    }
  }

  return (
    <div className='likemind' id={id}>
      <div className='likemind__header'>
        <div className='likemind__logo'>
          {likemindLogo}
        </div>

        <div className='likemind__info'>
          <span>{dates}<br />{location}</span>
        </div>

        <div className='likemind__speakers-music'>
          <span>Speakers:</span>
          <span>{speakers}</span>
          <span>Music:</span>
          <span>{music}</span>
        </div>

        <div className='likemind__link'>
          <a
            href={buttonLink}
            target='_blank'
          >{buttonText}</a>
          <button onClick={closeGallery}>Close Gallery</button>
        </div>
      </div>

      <div className='likemind__images' onClick={handleClick}>
        {images}
      </div>
    </div>
  )
}

Likemind.propTypes = {
  buttonLink: PropTypes.string,
  buttonText: PropTypes.string,
  dates: PropTypes.string,
  gallery: PropTypes.array,
  id: PropTypes.string,
  location: PropTypes.string,
  logo: PropTypes.object,
  music: PropTypes.string,
  speakers: PropTypes.string,
}

export default Likemind
