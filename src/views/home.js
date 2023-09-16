import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>WhiteBox</title>
        <meta property="og:title" content="WhiteBox" />
      </Helmet>
      <img alt="image" src="/wblogo-300h.png" className="home-image" />
      <span className="home-text">WhiteBox</span>
      <h1 className="home-text01">
        Copyright © 2022-2023 WhiteBox - All Rights Reserved.
      </h1>
      <div className="home-container1">
        <h1 className="home-text02">WhiteBox website now released!</h1>
        <span className="home-text03">
          <span>
            Along with the new coming season, We have released a website, which
            has the forums and store for easier access. This website will help
            us communicate with our community and keep everything tidy. Although
            forums are not released yet, they certainly will be released before
            2024. It is our first time making a website, so don&apos;t get used
            to this layout.
          </span>
          <br></br>
          <br></br>
          <span>- The Staff Team.</span>
          <br></br>
        </span>
      </div>
      <button type="button" className="home-button button">
        <svg viewBox="0 0 1024 1024" className="home-icon">
          <path d="M726 512q0 18-13 30t-31 12h-426l-170 172v-598q0-18 12-30t30-12h554q18 0 31 12t13 30v384zM896 256q18 0 30 12t12 30v640l-170-170h-470q-18 0-30-12t-12-30v-86h554v-384h86z"></path>
        </svg>
        <Link to="/forums" className="home-navlink">
          <span>FORUMS</span>
          <br></br>
        </Link>
      </button>
      <button type="button" className="home-button1 button">
        <svg viewBox="0 0 1024 1024" className="home-icon2">
          <path d="M726 768q34 0 59 26t25 60-25 59-59 25-60-25-26-59 26-60 60-26zM42 86h140l40 84h632q18 0 30 13t12 31q0 2-6 20l-152 276q-24 44-74 44h-318l-38 70-2 6q0 10 10 10h494v86h-512q-34 0-59-26t-25-60q0-20 10-40l58-106-154-324h-86v-84zM298 768q34 0 60 26t26 60-26 59-60 25-59-25-25-59 25-60 59-26z"></path>
        </svg>
        <a
          href="https://whitebox.tebex.io"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link"
        >
          <span>STORE</span>
          <br></br>
        </a>
      </button>
    </div>
  )
}

export default Home
