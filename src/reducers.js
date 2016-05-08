import { ADD_TODO, REMOVE_TODO } from './actions'
import { VisibilityFilters } from './actions'
import { combineReducers } from 'redux'

const initialState = {
  visibilityFilter: VisibilityFilters.ALL,
  posts: {}
}

/*export function golbyApp(state, action) {
  if (typeof state == 'undefined') {
    return initialState
  } else {
    switch(action.type) {
      return {
        visibilityFilter: filter(state.visibilityFilter, action),
        posts: posts(state.posts, action)
      }
    }
  }
}*/

const golbyApp = combineReducers({
  visibilityFilter,
  posts
})

export default golbyApp

function visibilityFilter(state = VisibilityFilters.ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY:
      return action.filter
    default:
      return state
  }
}

function posts(state = {}, action) {
  switch(action.type) {
    case ADD_POST:
      return {
          ...state.posts,
          {
            id: state.posts.length,
            body: action.body,
            title: action.title,
            published: false
          }
        }

    case PUBLISH_POST:
        state.posts.map((post) => {
          if (post.id == action.id) {
            return Object.assign({}, post, {
              published: true
            })
          } else {
            return post
          }
        })

    default:
      return state
  }
}
