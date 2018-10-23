import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import MetaTags from 'react-meta-tags';
import icon16 from '../images/favicon-16x16.png'


import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <MetaTags>
      <meta name="description" content="Spotify Jamroom: A new way to share music with loved ones" />
      <meta property="og:title" content="Spotify Jamroom" />
      <meta property="og:image" content="../images/spotify-jamroom.svg" />
    </MetaTags>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Spotify Jamroom: A new way to share music with loved ones' },
        { name: 'keywords', content: 'spotify jamroom, spotify, music' },
        { name: 'twitter:card', content:'Spotify Jamroom: A new way to share music with loved ones'},
        { name:'twitter:site', content:'Spotify Jamroom'},
        { name: 'image', content: icon16},
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${icon16}` }
    ]}
    />
      {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
