import React from "react"
import { rhythm, scale } from "../utils/typography"

const PostFrontmatter = ({ date, timeToRead, category, isInPost }) => {
  const Container = ({ children }) => isInPost
    ?
    (
      <p
        style={{
          ...scale(-1 / 5),
          display: `block`,
          marginBottom: rhythm(1),
        }}
      > {children}</p>
    )
    :
    (
      <small>{children}</small>
    )

  return (
    <Container>
      {date}
    </Container>
  )
}

export default PostFrontmatter