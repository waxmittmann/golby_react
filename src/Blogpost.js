import React, { PropTypes } from 'react'

const Blogpost = ({ onClick, published, title, body }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: published ? 'line-through' : 'none'
    }}
  >
    <p> {title} </p>
    <p> {body}  </p>
  </li>
)

Blogpost.propTypes = {
  onClick: PropTypes.func.isRequired,
  published: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

export default Blogpost
