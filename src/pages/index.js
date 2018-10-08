import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'

const IndexPage = () => (
  <div>
    <Header />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>A New Way to Jam Out</h1>
        <p>Create and share playlists with friends</p>
        <Link to="/video">Join the Party</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
