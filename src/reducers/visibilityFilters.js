import { ADD_POST, DELETE_POST, PUBLISH_POST, SET_VISIBILITY } from '../actions'
import { VisibilityFilters } from '../actions'
import { combineReducers } from 'redux'

function visibilityFilters(state = VisibilityFilters.ALL, action) {
  console.log("Inside visibilityFilter")
  switch (action.type) {
    case SET_VISIBILITY:
      console.log("RETURNING FROM VISIBLITY: " + action.filter)
      return action.filter

    default:
      console.log("RETURNING DEFAULT: " + state)
      return state
  }
}

export default visibilityFilters
