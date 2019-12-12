import React from 'react'
import Logo from './Logo'

const Header = (props) => {
  return (
    <div className='header'>
      <div className='logo'>
        <Logo />
      </div>

      <div className='header__info'>
        <p><Logo classes='no-text' /> is well-curated weekend of speakers, music, workshops, food, and drink. Since 2016, our goal has been to bring together people of all backgrounds to explore a single theme through each-others work.</p>
        <p>For the first time ever <Logo classes='no-text' /> IS coming to <span className='animate'>LOs ANGELES</span>, <span className='animate'>27-29 March</span> (2020).</p>
      </div>

      <div className='header__button'>
        <a href='https://www.eventbrite.com/e/likeminds-west-tickets-85393449105?utm-medium=discovery&utm-campaign=social&utm-content=attendeeshare&aff=escb&utm-source=cp&utm-term=listing' target='_blank'>Tickets on sale now</a>

        <div className='header__signup js-signup'>
          <label htmlFor='headerSignup'>STAY TUNED FOR SPEAKER and MUSIC ANNOUNCEMENTS AS WELL SPECIFIC INFORMATION LEADING UP TO LIKEMINDS.</label>
          <input
            placeholder='Email Address&hellip;'
            type='email'
          />
          <input type='submit' value='Sign Up' />
        </div>
      </div>

      <ul className='header__socials'>
        <li>
          <a href='https://instagram.com/likeminds.camp' target='_blank'>instagram</a>
        </li>
        <li>
          <a href='https://twitter.com/likeminds_camp' target='_blank'>twitter</a>
        </li>
        <li>
          <a href='mailto:info@likeminds.com'>email</a>
        </li>
        <li><a href='#pastLikemind'>past likeminds</a></li>
      </ul>
    </div >
  )
}

export default Header
