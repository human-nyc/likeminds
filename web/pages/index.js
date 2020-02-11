import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Event from '../components/Event'
import sanityClient from '../utils/client'

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
  artistsLogo,
  information[]->{
    title,
    blurb,
    website
  },
  informationlogo,
  theme, title, website
} | order(title desc) [0...25]`

const Index = ({data}) => {

  const events = data.map((
    {
      _id,
      date,
      gallery,
      logo,
      place,
      music,
      musiclogo,
      speakers,
      speakerslogo,
      workshops,
      workshopslogo,
      artists,
      artistslogo,
      information,
      informationlogo,
      theme,
      title,
      website 
    },
    index) => {
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
        location={place}
        logo={logo}
        music={music}
        musicLogo={musiclogo}
        speakers={speakers}
        speakersLogo={speakerslogo}
        workshops={workshops}
        workshopsLogo={workshopslogo}
        artists={artists}
        artistsLogo={artistslogo}
        information={information}
        informationLogo={informationlogo}
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
