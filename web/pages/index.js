import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Event from '../components/Event'
import sanityClient from '../utils/client'
import imageUrlBuilder from '@sanity/image-url'

const query = `*[_type == 'event'] {
  _id, date, gallery,
  logo,
  musiclogo,
  place,
  music[]->{
    avatar,
    title,
    blurb,
    website
  },
  speakers[]->{
    avatar,
    title,
    blurb,
    website
  },
  speakerslogo,
  workshops[]->{
    avatar,
    title,
    blurb,
    website
  },
  workshopslogo,
  artists[]->{
    avatar,
    title,
    blurb,
    website
  },
  artistslogo,
  information[]->{
    title,
    blurb,
    website
  },
  informationlogo,
  theme, title, 
  "videoURL": video.asset->url,
  website
} | order(title desc) [0...25]`

const Index = ({data}) => {

  return (
    <Layout>
      <div className='main'>
        <div className='video'>
          <video autoPlay loop muted playsInline="">
            <source src={data[0].videoURL} type='video/mp4' />
          </video>
        </div>
      </div>
      {data.map((event, idx) => <Event key={idx} index={idx} {...event} />)}
    </Layout>
  )
}

Index.propTypes = {
  data: PropTypes.array,
}

Index.getInitialProps = async () => {
  return {
    data: await sanityClient.fetch(query),
  }
}

export default Index
