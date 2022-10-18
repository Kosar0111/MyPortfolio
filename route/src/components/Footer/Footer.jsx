import React from 'react'
import './Footer.css'
import copy from '../../img/copy.png'

const Footer = () => {
  return (
    <div className='main__footer'>
      <img
        src={copy}
        alt='copy'
        className='copy'
      />
      <span className='copy__text'>copyright 2022</span>
    </div>
  )
}

export default Footer
