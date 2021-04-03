import * as React from "react"

// data
const title = "Quick TL;DR"

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
]

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>
       {title}
      </h1>
      <p>
        Edit <code>src/pages/index.js</code> to see this page
        update in real-time.{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
      <ul>
        {links.map(link => (
          <li key={link.url}>
            <span>
              <a href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`} >
                {link.text}
              </a>
              {link.badge && (
                <span aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage
