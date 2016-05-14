import { combineReducers } from 'redux'

import { ADD_POST, DELETE_POST, PUBLISH_POST, SET_VISIBILITY } from '../actions'
import { VisibilityFilters } from '../actions'

function visibilityFilter(state = VisibilityFilters.ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY:
      return action.filter

    default:
      return state
  }
}

export default visibilityFilter
