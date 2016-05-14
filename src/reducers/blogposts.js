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
      console.log("RETURNING FROM ADD: " + result)
      return result

    case PUBLISH_POST:
        var post = state[action.id]
        console.log("Post is " + post)
        if (post) {
          console.log("Is defined")
          var result = Object.assign({}, state)
          result[action.id] = Object.assign({}, post)
          result[action.id].published = true

          console.log("RETURNING FROM PUBLISH: " + result)
          return result
        } else {
          console.log("RETURNING PUBPUB" + state)
          return state
        }

    default:
      console.log("RETURNING DEFAULT FROM BLOGPOSTS: " + state)
      return state
  }
}

export default blogposts
