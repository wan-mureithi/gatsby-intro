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
         <ul>
      {
        data?.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}
export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }`
export const Head: HeadFC = ({ data }) => <Seo title='Blog page' />
export default BlogPage