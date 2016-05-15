import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'

import Blogpost from '../../src/components/Blogpost'

import {debug, debugAll} from '../util'


var titleText = 'Some title'
var bodyText = 'Some body'

function setup(isPublished) {
  let props = {
    blogpostClicked: expect.createSpy(),
    published: isPublished,
    title: titleText,
    body: bodyText
  }

  let renderer = TestUtils.createRenderer()
  renderer.render(<Blogpost {...props} />)
  let output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer
  }
}

describe('components', () => {
  describe('Blogpost', () => {
    it('should render correctly', () => {
      //Check that the outer list is correct
      var isPublished = true
      const blogpostLi = setup(isPublished).output
      expect(blogpostLi.type).toEqual('li')
      expect(blogpostLi.props.style.textDecoration).toBeDefined
      expect(blogpostLi.props.style.textDecoration).toEqual('none')

      //Check that the title and body elements are correct
      let [ title, body ] = blogpostLi.props.children
      expect(title).toBeDefined
      expect(title.props.children).toEqual(titleText)
      expect(body).toBeDefined
      expect(body.props.children).toEqual(bodyText)
    })

    it('should render with strikethrough when the item is not yet published', () => {
      //Check that strikethrough is not applied
      var isPublished = false
      const blogpostLi = setup(isPublished).output
      expect(blogpostLi.props.style.textDecoration).toEqual('line-through')

      //Check that the outer list is correct
      expect(blogpostLi.type).toEqual('li')
      expect(blogpostLi.props.style.textDecoration).toBeDefined

      //Check that the title and body elements are correct
      let [ title, body ] = blogpostLi.props.children
      expect(title).toBeDefined
      expect(title.props.children).toEqual(titleText)
      expect(body).toBeDefined
      expect(body.props.children).toEqual(bodyText)
    })

    it('should trigger blogpostClicked for onClick events', () => {
      const { output: blogpostLi, props: props } =
        setup(false)

      var clickedProp = props.blogpostClicked
      expect(clickedProp.calls.length).toBe(0)
      blogpostLi.props.onClick('')
      expect(clickedProp.calls.length).toBe(1)
    })
  })
})
