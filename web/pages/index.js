import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Event from '../components/Event'
import sanityClient from '../utils/client'

const query = `*[_type == 'event'] {
  _id, date, gallery, logo, place,
  music[]->{
    avatar[]->{image},
    title,
    blurb,
    website
  },
  speakers[]->{
    avatar[]->{image},
    title,
    blurb,
    website
  },
  workshops[]->{
    avatar[]->{image},
    title,
    blurb,
    website
  },
  artists[]->{
    avatar[]->{image},
    title,
    blurb,
    website
  },
  theme, title, website
} | order(title desc) [0...25]`

const Index = (props) => {
  const { data } = props

  const events = data.map(({ _id, date, gallery, logo, place, music, speakers, workshops, artists, theme, title, website }, index) => {
    const year = date.slice(date.indexOf('(') + 1, date.indexOf(')'))
    
    const layout = index === 0
      ? 'current'
      : ''

    const id = index === 1
      ? 'pastLikemind'
      : _id

    return (
      <Event
        buttonLink={website}
        buttonText={`VISIT ${year} WEBSITE`}
        dates={date}
        gallery={gallery}
        id={id}
        index={title}
        key={_id}
        layout={layout}
        location={place}
        logo={logo}
        music={music}
        speakers={speakers}
        workshops={workshops}
        artists={artists}
      />
    )
  })

  return (
    <Layout>
      <div className='main'>
        <div className='video'>
          <video autoPlay loop muted playsInline="">
            <source src='http://files.human-nyc.com/likeminds/LM_HomepageVid_v01.mp4' type='video/mp4' />
          </video>
        </div>
      </div>
      {events}
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
