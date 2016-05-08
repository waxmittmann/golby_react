import React from 'react'
import FilterLink from '../containers/FilterLink' //?

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="PUBLISHED_ONLY">
      Published
    </FilterLink>
    {", "}
    <FilterLink filter="UNPUBLISHED_ONLY">
      Unpublished
    </FilterLink>
  </p>
)

export default Footer
