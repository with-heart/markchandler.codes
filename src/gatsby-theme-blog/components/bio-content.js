import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Welcome to{" "}
    <Styled.a href="http://markchandler.codes/">markchandler.codes</Styled.a>
    {` `}, a blog about code.
  </Fragment>
)
