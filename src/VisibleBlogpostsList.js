import { connect } from 'react-redux'
import { publishBlogpost } from './actions'
import BlogpostList from './BlogpostList'

const getVisibleBlogposts = (blogposts, filter) => {
  switch (filter) {
    case 'ALL':
      return blogposts
    case 'PUBLISHED_ONLY':
      return blogposts.filter(bp => bp.published)
    case 'UNPUBLISHED_ONLY':
      return blogposts.filter(bp => !bp.published)
  }
}

const mapStateToProps = (state) => {
  return {
    blogposts: getVisibleBlogposts(state.blogposts, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBlogpostClick: (id) => {
      dispatch(toggleBlogpost(id))
    }
  }
}

const VisibleBlogpostsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogpostList)

export default VisibleBlogpostsList
