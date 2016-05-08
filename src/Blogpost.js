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

  Blogpost.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }

  export default Blogpost
