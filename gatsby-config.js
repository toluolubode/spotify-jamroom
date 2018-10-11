module.exports = {
  siteMetadata: {
    title: 'Spotify Jamroom',
  },
  plugins: ['gatsby-plugin-react-helmet',{
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-108088967-2",
      // Puts tracking script in the head instead of the body
      head: false
    },
  },
  {
    resolve: 'gatsby-plugin-mailchimp',
    options: {
      endpoint: 'https://uottawa-sesa.us17.list-manage.com/subscribe/post?u=0fee0e105ead7e1f0377df86e&amp;id=1650db5d2c', // see instructions section below
    },
  }
],
}
