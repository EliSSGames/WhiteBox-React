import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>WhiteBox</title>
          <meta property="og:title" content="WhiteBox" />
        </Head>
        <img alt="image" src="/wblogo-300h.png" className="home-image" />
        <span className="home-text">WhiteBox</span>
        <h1 className="home-text01">
          Copyright © 2022-2023 WhiteBox - All Rights Reserved.
        </h1>
        <div className="home-container1">
          <h1 className="home-text02">WhiteBox website now released!</h1>
          <span className="home-text03">
            <span>
              Along with the new coming season, We have released a website,
              which has the forums and store for easier access. This website
              will help us communicate with our community and keep everything
              tidy. Although forums are not released yet, they certainly will be
              released before 2024. It is our first time making a website, so
              don&apos;t get used to this layout.
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
          <Link href="/forums">
            <a className="home-link">
              <span>FORUMS</span>
              <br></br>
            </a>
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
            className="home-link1"
          >
            <span>STORE</span>
            <br></br>
          </a>
        </button>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
            background-color: #000000;
          }
          .home-image {
            width: 223px;
            height: 223px;
            object-fit: cover;
          }
          .home-text {
            color: rgb(255, 255, 255);
            width: var(--dl-size-size-maxwidth);
            height: var(--dl-size-size-xlarge);
            font-size: 100px;
            max-width: auto;
            min-width: auto;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-family: Roboto;
            font-weight: 800;
            line-height: 2;
            text-transform: capitalize;
          }
          .home-text01 {
            left: 0px;
            color: rgb(255, 255, 255);
            width: 1200px;
            bottom: 0px;
            height: 50px;
            margin: auto;
            position: absolute;
            align-self: flex-end;
            text-align: center;
            text-decoration: underline;
          }
          .home-container1 {
            top: 178px;
            left: 0px;
            right: 0px;
            width: 865px;
            height: 628px;
            display: flex;
            position: absolute;
            align-self: center;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            margin-left: auto;
            margin-right: auto;
            border-radius: 16px;
            margin-bottom: auto;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #1e1e1e;
          }
          .home-text02 {
            color: rgb(255, 255, 255);
            font-size: 75px;
            align-self: center;
            text-align: center;
            font-family: Roboto;
            font-weight: 700;
          }
          .home-text03 {
            color: rgb(194, 192, 192);
            width: auto;
            height: var(--dl-size-size-xlarge);
            font-size: 30px;
            align-self: flex-start;
            font-style: normal;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
              'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
              'Helvetica Neue', sans-serif;
            font-weight: 600;
          }
          .home-button {
            color: #ffffff;
            width: 359px;
            height: 91px;
            display: flex;
            z-index: 100;
            font-size: 50px;
            box-shadow: 5px 5px 10px 0px #6f6f6f;
            margin-top: var(--dl-space-space-fourunits);
            font-family: Roboto;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            border-radius: 20px;
            flex-direction: row;
            text-transform: uppercase;
            background-color: var(--dl-color-gray-500);
          }
          .home-icon {
            fill: #ffffff;
            width: 59px;
            height: 75px;
          }
          .home-link {
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            letter-spacing: 1px;
            text-decoration: none;
          }
          .home-button1 {
            color: #ffffff;
            width: 359px;
            height: 91px;
            display: flex;
            z-index: 100;
            position: relative;
            font-size: 50px;
            box-shadow: 5px 5px 10px 0px #6f6f6f;
            margin-top: var(--dl-space-space-fourunits);
            font-family: Roboto;
            margin-right: var(--dl-space-space-twounits);
            border-radius: 20px;
            flex-direction: row;
            text-transform: uppercase;
            background-color: var(--dl-color-gray-500);
          }
          .home-icon2 {
            fill: #ffffff;
            width: 70px;
            height: 73px;
            align-self: center;
          }
          .home-link1 {
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            letter-spacing: 1px;
          }
          @media (max-width: 991px) {
            .home-button1 {
              align-self: center;
              margin-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .home-image {
              width: 155px;
              height: 158px;
            }
            .home-text {
              width: var(--dl-size-size-xxlarge);
              height: var(--dl-size-size-large);
              font-size: 75px;
              line-height: 2.25;
            }
            .home-container1 {
              width: 479px;
              height: 720px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
