module.exports = {
  siteMetadata: {
    title: '18cc'
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/content/post/`,
      },
    }
  ]
}