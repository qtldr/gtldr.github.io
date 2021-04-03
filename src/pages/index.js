import React from "react"
import { Button, Jumbotron } from "react-bootstrap"
import Layout from "../components/layout"
import { Link } from "gatsby"

// markup
const IndexPage = () => (
    <Layout>
        <Jumbotron>
            <h1>Placeholder</h1>
            <p>
                Welcome
            </p>
            <p>
                <Button as={Link} to="https://github.com/qtldr" variant="primary">Learn more</Button>
            </p>
        </Jumbotron>
    </Layout>
);

export default IndexPage
