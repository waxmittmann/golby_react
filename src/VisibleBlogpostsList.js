import { connect } from 'react-redux'
import { publishBlogpost } from './actions'
import BlogpostList from './BlogpostList'

const getVisibleBlogposts = (blogposts, filter) => {
  switch (filter) {
    case 'ALL':
      return blogposts
    case 'PUBLISHED_ONLY':
      return filterMap(blogposts, (bp) => bp.published)
    case 'UNPUBLISHED_ONLY':
      return filterMap(blogposts, (bp) => !bp.published)
  }
}

function filterMap(inMap, filterFunc) {
  console.log("Filtering")
  
  var newMap = {}
  for (var key in inMap) {
    // skip loop if the property is from prototype
    if (!inMap.hasOwnProperty(key))
      continue;

    var val = inMap[key]

    if (filterFunc(val)) {
      newMap[key] = val
    }
  }

  return newMap
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
