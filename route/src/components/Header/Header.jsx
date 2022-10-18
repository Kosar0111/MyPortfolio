import React from 'react'
import './Header.css'

import nhl from '../../img/nhl.png'
import marker from '../../img/marker.png'
import user from '../../img/photo.jpeg'
import arrow from '../../img/Arrow-down.svg'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='logo'>
        <img
          src={nhl}
          alt='logo'
          className='logo-img'
        />
        <div className='logo__text'>NHL</div>
      </div>
      <div className='user'>
        <img
          src={marker}
          alt=''
          className='user__question'
        />
        <img
          src={user}
          alt='user'
          className='user__photo'
        />
        <div className='user__text'>@user name</div>
        <img
          src={arrow}
          alt='arrow'
          className='user__question'
        />
      </div>
    </div>
  )
}

export default Header
