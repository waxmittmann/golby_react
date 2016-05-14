import { combineReducers } from 'redux'

import blogposts from './blogposts'
import visibilityFilter from './visibilityFilter'

const golbyApp = combineReducers({
  blogposts,
  visibilityFilter
})

export default golbyApp
