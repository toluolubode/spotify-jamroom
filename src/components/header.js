import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
  <div className="HeaderImage">
    <Link to="/"><img width="200" src={require('../images/spotify-jamroom.svg')} /></Link>
  </div>
  <div className="HeaderGroup">
    <a href="https://tolu.design/#/spotify-jam-room/"  target="_blank"><button>Learn more</button></a>
  </div>
</div>
)

export default Header
