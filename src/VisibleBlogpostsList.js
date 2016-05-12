import { connect } from 'react-redux'
import { publishBlogpost } from './actions'
import BlogpostList from './BlogpostList'

const getVisibleBlogposts = (blogposts, filter) => {
  switch (filter) {
    case 'ALL':
      return blogposts
    case 'PUBLISHED_ONLY':
      //(([k, v]) => k < 3
      var r = filterMap(blogposts, (bp) => bp.published)
      console.log("Blogposts: " + blogposts)
      console.log(blogposts)
      console.log("R: " + blogposts)
      console.log(r)
      return r
      //return blogposts.filter(bp => bp.published)
    case 'UNPUBLISHED_ONLY':
      var r = filterMap(blogposts, (bp) => !bp.published)
      console.log("Blogposts: " + blogposts)
      console.log(blogposts)
      console.log("R: " + blogposts)
      console.log(r)
      return r
      //return blogposts.filter(bp => !bp.published)
  }
}

function filterMap(inMap, filterFunc) {
  //var initial = [...inMap].filter(filterFunc)
  console.log("Initial: ")
  console.log(inMap)

console.log("a")
  var newMap = {}
  for (var key in inMap) {
    console.log("b")
    // skip loop if the property is from prototype
    if (!inMap.hasOwnProperty(key))
      continue;
      console.log("c")

    var val = inMap[key]

    console.log("key: " + key)
    if (filterFunc(val)) {
      console.log("d")
      newMap[key] = val
      console.log("e")
    }
  }
  console.log("f")

  return newMap
  // if (Object.keys(inMap).length > 0) {
  //   console.log()
  //   return new Map(initial)
  // } else {
  //   return new Map()
  // }
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
