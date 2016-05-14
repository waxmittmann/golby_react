import { ADD_POST, DELETE_POST, PUBLISH_POST} from '../actions'
import { VisibilityFilters } from '../actions'

function blogposts(state = {}, action) {
  console.log("Inside blogposts")
  switch(action.type) {
    case ADD_POST:
      const newId = (Object.keys(state).length)
      var result =  Object.assign({}, state)
      result[newId] = {
        //id: newId,
        body: action.body,
        title: action.title,
        published: false
      }
      return result

    case PUBLISH_POST:
        state.map((post) => {
          if (post.id == action.id) {
            return Object.assign({}, post, {
              published: false
            })
          } else {
            return post
          }
        })

    default:
      return state
  }
}

export default blogposts
