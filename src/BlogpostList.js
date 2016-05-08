import React, { PropTypes } from 'react'
import Blogpost from './Blogpost'

const BlogpostList = ({ blogPosts, onBlogpostClick }) => (
  <ul>
    {blogposts.map(blogpost =>
      <Blogpost
        key={blogpost.id}
        {...blogpost}
        onClick={() => onBlockpostClick(blogpost.id)}
      />
    )}
  </ul>
)

BlogpostList.propTypes = {
  blogposts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    published: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired).isRequired

  onBlogpostClick: PropTypes.func.isRequired
}

export default BlogpostList
