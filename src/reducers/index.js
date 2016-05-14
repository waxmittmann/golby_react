import blogposts from '../blogposts'
import visibilityFilters from '../visibilityFilters'
import { combineReducers } from 'redux'

const golbyApp = combineReducers({
  blogposts,
  visibilityFilter
})

export default golbyApp
