import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Likemind from '../components/Likemind'
import sanityClient from '../utils/client'

const query = `*[_type == 'event'] {
  _id, date,logo, place, theme, title, website,
  speakers[]->{title},
  music[]->{title},
  gallery,
} | order(title desc) [0...25]`

const Index = (props) => {
  const { data } = props

  const events = data.map(({ _id, date, gallery, logo, place, music, speakers, theme, title, website }, index) => {
    const year = date.slice(date.indexOf('(') + 1, date.indexOf(')'))
    const speakersStr = speakers
      ? speakers.map(({ title }) => title).join(', ')
      : ''
    const musicStr = music
      ? music.map(({ title }) => title).join(', ')
      : ''
    // const id = index === 1
    //   ? 'pastLikemind'
    //   : _id
    const layout = index === 1
      ? 'current'
      : ''

    return (
      <Likemind
        buttonLink={website}
        buttonText={`VISIT ${year} WEBSITE`}
        dates={date}
        gallery={gallery}
        id={_id}
        index={title}
        key={_id}
        layout={layout}
        location={place}
        logo={logo}
        music={musicStr}
        speakers={speakersStr}
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
