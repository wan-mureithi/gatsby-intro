import React from 'react'
import { HeadFC, PageProps, graphql } from "gatsby"
import Layout from '../components/layout'
import Seo from '../components/seo'

interface BlogProps extends PageProps {
 data: any
}

const BlogPage: React.FC<BlogProps> = ({ data }) => {
  return (
    <Layout pageTitle='My blog posts'>
         {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  )
}
export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        id
        excerpt
      }
    }
  }
`
export const Head: HeadFC = ({ data }) => <Seo title='Blog page' />
export default BlogPage