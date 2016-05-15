import React, { PropTypes } from 'react'

const Blogpost = ({ blogpostClicked, published, title, body }) => (
  <li
    onClick={blogpostClicked}
    style={{
      textDecoration: published ? 'none' : 'line-through'
    }}
  >
    <p>{title}</p>
    <p>{body}</p>
  </li>
)

Blogpost.propTypes = {
  blogpostClicked: PropTypes.func.isRequired,
  published: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

export default Blogpost
