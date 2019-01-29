const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'PostJson') {
    createNodeField({
      node,
      name: `slug`,
      value: node.slug,
    })
  }
}



exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allPostJson {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `
  ).then(result => {
    result.data.allPostJson.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug
        }
      })
    })
  })
}