import expect from 'expect'
import { ADD_POST, DELETE_POST, PUBLISH_POST, SET_VISIBILITY } from '../../src/actions'
import blogposts from '../../src/reducers/blogposts'

describe('Blogpost reducer', function () {
  it('should correctly add a post to empty state', function () {
    //Given
    var title = "This is the title"
    var body = "This is the body"
    var addBlogpostAction = {
      type: ADD_POST,
      body: body,
      title: title
    }

    //When
    var result = blogposts({}, addBlogpostAction)

    //Then
    expect(Object.keys(result).length).toBe(1)
    expect(result[0]).toBeDefined
    var firstPost = result[0]
    expect(firstPost).toEqual({
      title: title,
      body: body,
      published: false
    })
  })

  it('should correctly add a post when there is already a post', function () {
    //Given
    var existingEntry = {
      title: "Some title",
      body: "Some body",
      published: true
    }

    var curState = {
      "0": existingEntry
    }

    var title = "This is the title"
    var body = "This is the body"
    var addBlogpostAction = {
      type: ADD_POST,
      body: body,
      title: title
    }

    //When
    var result = blogposts(curState, addBlogpostAction)

    //Then
    expect(Object.keys(result).length).toBe(2)
    expect(result[0]).toBeDefined
    expect(result[1]).toBeDefined
    expect(result).toEqual({
      "0": existingEntry,
      "1":  {
              title: title,
              body: body,
              published: false
            }
    })
  })
})
