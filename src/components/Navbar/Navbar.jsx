import React from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {FaDiscord} from 'react-icons/fa'
import {SiDiscord} from 'react-icons/si'
import {images} from '../../constants'

import {Rules, Download} from '../../container'
import Home from '../Home/Home'

import './Navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav>
        <div className="app__navbar">
          <div className="app__navbar-logo">
            <img src={images.cv} alt="logo" /><p className="p__cormorant">Crazy Veterans</p>
          </div>
          <div className="app__navbar-links">
            <div className="app__navbar-links_li">
              <Link to="/" className="app__navbar-links_li p__opensans">
                home
              </Link>
              <Link to="/download" className="app__navbar-links_li p__opensans">
                Download
              </Link>
              <Link to="/rules" className="app__navbar-links_li p__opensans ">
                Rules
              </Link>
              <Link to="/server" className="app__navbar-links_li p__opensans">
                Server
              </Link>
              <Link to="/stats" className="app__navbar-links_li p__opensans">
                Stats
              </Link>
              <a href="https://discord.com/invite/CYzup3qgAh">
                <button type="button" className="discord2">
                <FaDiscord fontSize={25}/>
                <p>Our Discord</p>
                </button>
                </a>
            </div>

            <div className="app__navbar-smallscreen">
              <GiHamburgerMenu
                color="#fff"
                fontSize={27}
                onClick={() => setToggleMenu(true)}
              />
              {toggleMenu && (
                <div className="app__navbar-smallscreen_overlay">
                  <AiFillCloseCircle
                    fontSize={27}
                    className="overlay__close"
                    onClick={() => setToggleMenu(false)}
                  />
                  <nav className="app__navbar-smallscreen_links">
                  <Link to="/" className="app__navbar-smallscreen_links_li" onClick={() => setToggleMenu(false)}>
                    Home
                  </Link>
                  <Link
                    to="/download"
                    className="app__navbar-smallscreen_links_li"
                    onClick={() => setToggleMenu(false)}
                  >
                    Download
                  </Link>
                  <Link
                    to="/rules"
                    className="app__navbar-smallscreen_links_li"
                    onClick={() => setToggleMenu(false)}
                 >
                    Rules
                  </Link>
                  <Link
                    to="/server"
                    className="app__navbar-smallscreen_links_li"
                    onClick={() => setToggleMenu(false)}
                  >
                    Server
                  </Link>
                  <Link
                    to="/stats"
                    className="app__navbar-smallscreen_links_li"
                    onClick={() => setToggleMenu(false)}
                  >
                    Stats
                  </Link>
                 
                  </nav>
                  <div >
                  <a href="https://discord.com/invite/CYzup3qgAh" className="logo-small">
                <button type="button" className="button-discord2" style={{marginTop: '20px'}}>
                <FaDiscord fontSize={30}/>
                <p>Join Our Discord</p>
                </button>
                </a>
                 <div className="logo-small">
                 <a href="http://forgottenhope.warumdarum.de/">
                <img src={images.fh21} alt="fh2" className="fh2logo"/>
                </a>
                <img src={images.cv} alt="logo" className="logo"/>
                <p>©2022 All Rights Reserved.</p>
                </div> 
               </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar