import { ADD_POST, DELETE_POST, PUBLISH_POST, SET_VISIBILITY } from '../actions'
import { VisibilityFilters } from '../actions'
import { combineReducers } from 'redux'

function visibilityFilter(state = VisibilityFilters.ALL, action) {
  console.log("Inside visibilityFilter")
  switch (action.type) {
    case SET_VISIBILITY:
      return action.filter

    default:
      return state
  }
}

export default visibilityFilters
