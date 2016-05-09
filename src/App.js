import React from 'react'
import Footer from './Footer'
import VisibleBlogpostsList from './VisibleBlogpostsList'
import AddBlogpost from './AddBlogpost'

const App = () => (
  <div>
    <AddBlogpost />
    <VisibleBlogpostsList />
    <Footer />
  </div>
)

export default App
