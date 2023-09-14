import React from 'react'

export default function Banner({bannerLogo, h1Value}) {
  return (
    <div className='banner-css'>
        <p></p>
        <img src={bannerLogo} alt="" />
        <h1>{h1Value}</h1>
    </div>
  )
}
