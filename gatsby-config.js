module.exports = {
  siteMetadata: {
    title: '18 Caret Code'
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