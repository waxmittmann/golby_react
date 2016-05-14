import expect from 'expect'
import * as actions from '../../src/actions'

describe('golby actions', () => {
  it('addBlogpost should create an ADD_POST action', () => {
    var body = "BODY"
    var title = "TITLE"

    expect(actions.addBlogpost(title, body)).toEqual({
      type: 'ADD_POST',
      body: body,
      title: title
    })
  })

  // it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
  //   expect(actions.setVisibilityFilter('active')).toEqual({
  //     type: 'SET_VISIBILITY_FILTER',
  //     filter: 'active'
  //   })
  // })
  //
  // it('toggleTodo should create TOGGLE_TODO action', () => {
  //   expect(actions.toggleTodo(1)).toEqual({
  //     type: 'TOGGLE_TODO',
  //     id: 1
  //   })
  // })
})
