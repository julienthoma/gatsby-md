module.exports = {
  siteMetadata: {
    title: 'Julien Thoma',
    description: 'Julien Thoma Stuff'
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/pages`
      }
    }

  ]
}
