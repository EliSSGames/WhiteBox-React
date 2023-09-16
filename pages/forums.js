import React from 'react'
import Head from 'next/head'

const Forums = (props) => {
  return (
    <>
      <div className="forums-container">
        <Head>
          <title>Forums - WhiteBox</title>
          <meta property="og:title" content="Forums - WhiteBox" />
        </Head>
        <h1 className="forums-text">
          <span>Error. Forums not released yet.</span>
          <br></br>
        </h1>
      </div>
      <style jsx>
        {`
          .forums-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #000000;
          }
          .forums-text {
            color: rgb(255, 255, 255);
            width: 1208px;
            height: 1024px;
            font-size: 5em;
            align-self: center;
            text-align: center;
            padding-top: 500px;
            padding-bottom: 500px;
          }
        `}
      </style>
    </>
  )
}

export default Forums
