import blogposts from './blogposts'
import visibilityFilter from './visibilityFilter'
import { combineReducers } from 'redux'

const golbyApp = combineReducers({
  blogposts,
  visibilityFilter
})

export default golbyApp
