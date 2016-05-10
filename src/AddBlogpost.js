import React from 'react'
import { connect } from 'react-redux'
import { addBlogpost } from './actions'

let AddBlogpost = ({ dispatch }) => {
  let title
  let body

  return (
    <div>
      <div>
      <input ref={node => {
        title = node
      }} />
      </div>

      <div>
      <textarea ref={node => {
        body = node
      }} />
      </div>

      <div>
      <button onClick={() => {
        dispatch(addBlogpost(title.value, body.value))
        title.value = ''
        body.value
      }}>
        Add Blogpost
      </button>
      </div>
    </div>
  )
}

AddBlogpost = connect()(AddBlogpost)

export default AddBlogpost
