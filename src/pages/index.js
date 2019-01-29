import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
  console.log("data", data)
  return <Layout>
    <div>
      <h1> {data.site.siteMetadata.title} </h1>
    </div>
  </Layout>
}

// query some data from config file.
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allPostJson(sort: { fields: [date], order: DESC }) {
      totalCount
      edges {
        node {
          title
          slug
          date
          body
        }
      }
    }
  }
`


