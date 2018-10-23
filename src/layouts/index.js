import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import icon16 from '../images/favicon-16x16.png'


import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Spotify Jamroom: A new way to share music with loved ones' },
        { name: 'keywords', content: 'spotify jamroom, spotify, music' },
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
