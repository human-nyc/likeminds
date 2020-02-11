import React from 'react'
import PropTypes from 'prop-types'
import client from '../utils/client'
import imageUrlBuilder from '@sanity/image-url'


const ItemsGrid = (props) => {
  const { title, logo, items } = props
  const builder = imageUrlBuilder(client)

  const urlFor = function urlFor(source) {
    return builder.image(source)
  }
  const gridLogo = logo
    ? <img src={urlFor(logo).url()} alt={title} loading='lazy' />
    : <h2>{title}</h2>

  const allItems = items  
    ? items.map((item, index) => {

        const itemImage = item.avatar 
          ? <div className='item-image'>
            <img src={urlFor(item.avatar).width(300).url()} alt={item.title} loading='lazy' />
          </div>
          : ''

        return (

          <div key={index} className='item'>
            {itemImage}
            <div className='item-info'>
              <div className='item-title'>
                {item.title}
              </div>
              <div className='item-blurb'>
                {item.blurb}
              </div>
              <div className='item-website'>
                {item.website}
              </div>
            </div>  
          </div>
        )
      })
    : ''

  return (
    <div className='itemsGrid-wrapper'>
      <div className='itemsGrid-header'>
        <div className='itemsGrid-logo'>
          {gridLogo}
        </div>
      </div>
      <div className='itemsGrid'>
        {allItems}
      </div>
    </div>
  )
}

ItemsGrid.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  logo: PropTypes.object
}

export default ItemsGrid
