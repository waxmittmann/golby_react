import React from 'react'

import VisibleBlogpostsList from '../containers/VisibleBlogpostsList'
import AddBlogpost from '../containers/AddBlogpost'

import Footer from './Footer'

const App = () => (
  <div>
    <AddBlogpost />
    <VisibleBlogpostsList />
    <Footer />
  </div>
)

export default App
