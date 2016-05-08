export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const PUBLISH_POST = 'PUBLISH_POST'
export const SET_VISIBILITY = 'SET_VISIBILITY'

export const VisibilityFilters = {
  ALL: 'ALL',
  PUBLISHED_ONLY: 'PUBLISHED_ONLY',
  UNPUBLISHED_ONLY: 'UNPUBLISHED_ONLY'
}

export function addBlogpost(title, body) {
  return {
    type: ADD_POST,
    title: title,
    body: body
  }
}

export function deleteBlogpost(id) {
  return {
    type: DELETE_POST,
    id: id
  }
}

export function publishBlogpost(id) {
  return {
    type: PUBLISH_POST,
    id: id
  }
}

// const boundAddBlogPost = (title, body) => dispatch(addBlogPost(title, body))
//
// const boundDeleteBlogPost = (id) => dispatch(deleteBlogPost(id))
