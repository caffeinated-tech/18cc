import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
  console.log("data")
  console.log(data)

  return (
    <Layout>
      <div>
        <h1>{data.postJson.title}</h1>
        <b>{data.postJson.date}</b>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    postJson( slug: { eq: $slug }) {
      title
      slug
      date
      body
    }
  }
`