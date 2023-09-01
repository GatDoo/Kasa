import React from 'react'

export default function Profile({ host, himage }) {
  return (
    <div className='profile-div'>
        <p>{host}</p><img src={himage} alt="" />
    </div>
  )
}
