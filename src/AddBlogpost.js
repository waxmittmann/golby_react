import React from 'react'
import { connect } from 'react-redux'
import { addBlogpost } from './actions'

let AddBlogpost = ({ dispatch }) => {
  let input

  return (
    <div>
      <input ref={node => {
        input = node
      }} />

      <button onClick={() => {
        dispatch(addBlogpost(input.value, input.value))
        input.value = ''
      }}>
        Add Blogpost
      </button>
    </div>
  )
}

AddBlogpost = connect()(AddBlogpost)

export default AddBlogpost
