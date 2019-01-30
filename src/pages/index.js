import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
  console.log("data", data)
  return <Layout>
    <div className="hero">
      <img src="/assets/18cc.svg"/>
      <h1> {data.site.siteMetadata.title} </h1>
      <hr/>
    </div>
    <p>
      Welcome to 18cc: a collection of concise software development insights. 
      Think motivational posters filled with practical coding advice.
    </p>
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


