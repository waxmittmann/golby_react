import React, { PropTypes } from 'react'

import Blogpost from './Blogpost'

const BlogpostList = ({ blogposts, onBlogpostClick }) =>
  (
  <ul>
    {Object.keys(blogposts)
      .map((postId) => (
        <Blogpost
          key={postId}
          {...blogposts[postId]}
          onClick={() => onBlockpostClick(postId)}
        />
    ))}
  </ul>
  )

BlogpostList.propTypes = {
  blogposts: PropTypes.objectOf(PropTypes.shape({
    published: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired).isRequired,

  onBlogpostClick: PropTypes.func.isRequired
}

export default BlogpostList
