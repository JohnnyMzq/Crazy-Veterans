import React from 'react'

import {images} from '../../constants'
import {FaDiscord} from 'react-icons/fa'
import {AiOutlineYoutube} from 'react-icons/'

import './Footer.css'

const Footer = () => {
  return (
    <div className="app__footer">
    <div>
        <div className="app__footer-logo">
        <img src={images.cv} alt="logo" className="app__footer-logo"/>
        </div>
      <div className="p__footer">
          <p>©2022 All Rights Reserved.</p>
      </div>
    </div>

    
    <div>
        <div >
            <a href="https://discord.gg/zTRnqH5Z">
                
                <div className="app__footer-logo2">
      <img src={images.fh2logo1} alt="finus_img" />
    </div>
            </a>
        </div>
    </div>
  </div>
  )
}

export default Footer