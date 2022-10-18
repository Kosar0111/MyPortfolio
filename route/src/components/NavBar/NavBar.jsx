import React from 'react'
import { NavLink } from 'react-router-dom'
import main from '../../img/main.png'
import saved from '../../img/saved.png'
import explor from '../../img/explore.png'
import message from '../../img/message.png'
import settings from '../../img/setting.png'
import group from '../../img/group.png'
import user from '../../img/user.png'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='list'>
      <div className='list__item'>
        <img
          className='img__nav'
          src={main}
          alt='main'
        />
        <NavLink to='/'>Main</NavLink>
      </div>
      <div className='list__item'>
        <img
          className='img__nav'
          src={explor}
          alt='explor'
        />
        <NavLink to='/explore'>Explore</NavLink>
      </div>
      <div className='list__item'>
        <img
          className='img__nav'
          src={message}
          alt='message'
        />
        <NavLink to='/messages'>Messages</NavLink>
      </div>
      <div className='list__item'>
        <img
          className='img__nav'
          src={saved}
          alt='saved'
        />
        <NavLink to='/saved'>Saved</NavLink>
      </div>
      <div className='list__item'>
        <img
          className='img__nav'
          src={settings}
          alt='settings'
        />
        <NavLink to='/settings'>Settings</NavLink>
      </div>
      <div className='list__item'>
        <img
          className='img__nav'
          src={group}
          alt='group'
        />
        <NavLink to='/subscribers'>Subscribers</NavLink>
      </div>
      <div className='list__item'>
        <img
          className='img__nav'
          src={user}
          alt='user'
        />
        <NavLink to='/subscriptions'>Subscriptions</NavLink>
      </div>
    </div>
  )
}

export default NavBar
