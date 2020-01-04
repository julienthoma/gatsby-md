module.exports = {
  siteMetadata: {
    title: 'Julien Thoma',
    description: 'Julien Thoma Stuff'
  },
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `home`,
        path: `${__dirname}/content/home`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          { resolve: 'gatsby-remark-copy-linked-files' },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200
            }
          }
        ]
      }
    }
  ]
};
