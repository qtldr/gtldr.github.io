import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
const data = useStaticQuery(graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`)

return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>
        <Container fluid>{children}</Container>
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout