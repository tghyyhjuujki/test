import React from 'react';
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const AboutPage = ({ location, data }) => (
  <Layout location={location} title={data.site.siteMetadata.title}>
    <SEO title="About" />
    <h1>About Me</h1>
    <p>github : <a href="http://github.com/tghyyhjuujki" target="blank">github.com/tghyyhjuujki</a></p>

    <p>비공식 연습용 블로그입니다.</p>
    <p>사이트를 구축하는데에 다음 자료들을 참고했습니다</p>
    <p>start-kit : <a href="https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/" target="blank">gatsby-start-blog</a></p>
    <p>Design and Category: <a href="https://ohseunghyeon.github.io/" target="blank">Lazy Nyaong</a></p>
  </Layout>
)

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
