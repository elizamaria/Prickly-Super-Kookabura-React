import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Prickly Super Kookabura</title>
        <meta property="og:title" content="Prickly Super Kookabura" />
      </Helmet>
    </div>
  )
}

export default Home
