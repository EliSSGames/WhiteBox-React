import React from 'react'

import { Helmet } from 'react-helmet'

import './forums.css'

const Forums = (props) => {
  return (
    <div className="forums-container">
      <Helmet>
        <title>Forums - WhiteBox</title>
        <meta property="og:title" content="Forums - WhiteBox" />
      </Helmet>
      <h1 className="forums-text">
        <span>Error. Forums not released yet.</span>
        <br></br>
      </h1>
    </div>
  )
}

export default Forums
