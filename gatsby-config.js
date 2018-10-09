module.exports = {
  siteMetadata: {
    title: 'Spotify Jamroom',
  },
  plugins: ['gatsby-plugin-react-helmet',{
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-108088967-2",
      // Puts tracking script in the head instead of the body
      head: true,
      sampleRate: 5,
      siteSpeedSampleRate: 10,
    },
  }],
}
