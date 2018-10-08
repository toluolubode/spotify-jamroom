import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
  <div className="HeaderImage">
    <Link to="/"><img width="200" src={require('../images/spotify-jamroom.svg')} /></Link>
  </div>
  <div className="HeaderGroup">
    <Link to="/courses">Premium</Link>
    <Link to="/downloads">Join the jam</Link>
    <Link to="/workshops">Log in</Link>
    <Link to="/buy"><button>Sign up</button></Link>
  </div>
</div>
)

export default Header
