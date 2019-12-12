import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

import '../public/style.scss'

const Layout = (props) => (
  <div>
    <Head>
      <title>Likeminds</title>
      <meta name='viewport' content='initial-scale=1, viewport-fit=cover' key='viewport' />
      <link rel='shortcut icon' href='/favicon.ico' />
    </Head>

    <Header />
    {props.children}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.array,
}

export default Layout
