import { ADD_POST, DELETE_POST, PUBLISH_POST, SET_VISIBILITY } from './actions'
import { VisibilityFilters } from './actions'
import { combineReducers } from 'redux'

function visibilityFilter(state = VisibilityFilters.ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY:
      return action.filter

    default:
      return state
  }
}

function blogposts(state = {}, action) {
  switch(action.type) {
    case ADD_POST:
      const newId = (Object.keys(state).length + 1)
      var result =  Object.assign({}, state)
      result[newId] = {
        id: newId,
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

const golbyApp = combineReducers({
  blogposts,
  visibilityFilter
})

//export blogposts
export default golbyApp
