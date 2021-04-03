import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Button, Navbar, Nav, NavItem, Container } from "react-bootstrap"

const textAlignCenter = {
    textAlign: 'center'
}

const Footer = ({ label }) => (
    <Navbar bg="dark" variant="dark" fixed="bottom">
        <Container className="justify-content-md-center">
            <Navbar.Text>
                {label}  © {new Date().getFullYear()}
            </Navbar.Text>
        </Container>
    </Navbar>
)

Footer.propTypes = {
    footer: PropTypes.string,
}

Footer.defaultProps = {
    label: ``,
}

export default Footer