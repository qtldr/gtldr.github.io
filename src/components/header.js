import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Button, Navbar, Nav, NavItem } from "react-bootstrap"

const Header = ({ siteTitle }) => (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} href="/">
        {siteTitle}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                <NavItem href="/about">
                    <Nav.Link as={Link} activeClassName="active" to="/">
                    About
                    </Nav.Link>
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header