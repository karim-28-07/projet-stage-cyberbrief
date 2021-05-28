import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Articles = () => (
  <Layout>
    <Seo title="Articles" />
    <h1>Hi from articles</h1>
    <p>Welcome to articles</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Articles