import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import Mailchimp from 'react-mailchimp-form'

const Header = () => {
  const [modifier, setModifier] = useState('')
  const showSignUp = () => {
    setModifier('is-visible')
  }
  const hideSignUp = ({ target }) => {
    if (!target.closest('.js-signup')) {
      setModifier('')
    }
  }

  useEffect(() => {
    document.querySelector('.js-signup input').focus()
    if (modifier === 'is-visible') {
      document.querySelector('.js-layout').addEventListener('click', hideSignUp)
    } else {
      document.querySelector('.js-signup').removeEventListener('click', hideSignUp)
    }
  })

  return (
    <div className='header'>
      <div className='logo'>
        <Logo />
      </div>

      <div className='header__info'>
        <p><Logo classes='no-text' /> is well-curated weekend of speakers, music, workshops, food, and drink. Since 2016, our goal has been to bring together people of all backgrounds to explore a single theme through each other's work.</p>
        <p><Logo classes='no-text' /> returns <span className='animate'>September 25-27 (2020).</span> <button onClick={showSignUp} type='button'>Sign Up</button> for announcements.</p>
        <div className={`header__signup js-signup ${modifier}`}>
          <label htmlFor='headerSignup'>STAY TUNED FOR SPEAKER and MUSIC ANNOUNCEMENTS AS WELL SPECIFIC INFORMATION LEADING UP TO LIKEMINDS.</label>
          <Mailchimp
            action='https://camp.us19.list-manage.com/subscribe/post?u=358143694606dde15fb491f0b&amp;id=c06b53b3db'
            fields={[
              {
                name: 'EMAIL',
                placeholder: 'Email Address…',
                type: 'email',
                required: true,
              },
            ]}
            messages={
              {
                sending: 'Sending...',
                success: 'Joel Fear thanks you!',
                error: 'An unexpected internal error has occurred.',
                empty: 'Please give us your e-mail address.',
                duplicate: 'Too many subscribe attempts for this email address',
                button: 'Sign Up',
              }
            }
          />
        </div>
      </div>

      <div className='header__button'>
        <a href='https://www.eventbrite.com/e/likeminds-west-tickets-85393449105?utm-medium=discovery&utm-campaign=social&utm-content=attendeeshare&aff=escb&utm-source=cp&utm-term=listing' target='_blank'>Tickets on sale now</a>
      </div>

      <nav className='header__socials'>
        <a href='https://instagram.com/likeminds.camp' target='_blank'>instagram</a>
        <a href='https://twitter.com/likeminds_camp' target='_blank'>twitter</a>
        <a href='mailto:info@likeminds.camp'>email</a>
        <a href='#pastLikemind'>past likeminds</a>
      </nav>
    </div >
  )
}

export default Header
