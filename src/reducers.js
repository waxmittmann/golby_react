import { ADD_POST, DELETE_POST, PUBLISH_POST, SET_VISIBILITY } from './actions'
import { VisibilityFilters } from './actions'
import { combineReducers } from 'redux'

/*
const initialState = {
  visibilityFilter: VisibilityFilters.ALL,
  blogposts: {}
}*/

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
  blogposts,
  visibilityFilter
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

function blogposts(state = {}, action) {
  switch(action.type) {
    case ADD_POST:
      const newId = (Object.keys(state).length + 1)
      console.log("For state:\n")
      console.log(state)
      console.log("Assigning with " + newId)
      var result =  Object.assign({}, state)
      console.log("Copy is:\n")
      console.log(result)
      result[newId] = {
        //id: newId,
        id: 1,
        body: action.body,
        title: action.title,
        published: false
      }
      console.log("After it is:\n")
      console.log(result)

      return result
      /*
      return Object.assign({}, {
          ...state,
          newId: {
            //id: newId,
            id: 1,
            body: action.body,
            title: action.title,
            published: false
          }
        })*/

    case PUBLISH_POST:
        state.map((post) => {
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
