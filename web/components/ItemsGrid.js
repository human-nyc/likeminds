import React from 'react'
import PropTypes from 'prop-types'
import client from '../utils/client'
import imageUrlBuilder from '@sanity/image-url'


const ItemsGrid = (props) => {
  const { title, items } = props
  const builder = imageUrlBuilder(client)

  const urlFor = function urlFor(source) {
    return builder.image(source)
  }
  const allItems = items  
    ? items.map((item, index) => {

        const itemImage = item.avatar 
          ? <img src={urlFor(item.avatar).url()} alt={item.title} loading='lazy' />
          : <img src='image.png' alt={item.title} loading='lazy' />

        console.log('item:', item)
        console.log('item.avatar:', item.avatar)

        return (

          <div key={index} className='item'>
            <div className='item-image'>
              {itemImage}
            </div>
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
          {title}
        </div>
      </div>
      <div className='itemsGrid'>
        {allItems}
      </div>
    </div>
  )
}

ItemsGrid.propTypes = {
  items: PropTypes.array
}

export default ItemsGrid
