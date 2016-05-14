import { ADD_POST, DELETE_POST, PUBLISH_POST} from '../actions'
import { VisibilityFilters } from '../actions'

function blogposts(state = {}, action) {
  console.log("Inside blogposts")
  switch(action.type) {
    case ADD_POST:
      const newId = (Object.keys(state).length)
      var result =  Object.assign({}, state)
      result[newId] = {
        body: action.body,
        title: action.title,
        published: false
      }
      return result

    case PUBLISH_POST:
        var post = state[action.id]
        if (post) {
          var result = Object.assign({}, state)
          result[action.id] = Object.assign({}, post)
          result[action.id].published = true
          return result
        } else {
          return state
        }

    default:
      return state
  }
}

export default blogposts
