import React from 'react'
import { HeadFC, PageProps } from "gatsby"
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"
import Seo from '../components/seo'

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="About Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
      alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
      src="../images/hot-2.jpg"/>
    </Layout>
  )
}

export default AboutPage


export const Head: HeadFC = () => <Seo title='About page' />