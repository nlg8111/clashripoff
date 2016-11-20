import "react-native"
import React from "react"
import Index from "../index.ios.js"

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer"

// Allow unsued tree const until we have actual tests
/*eslint no-unused-vars: 0*/
it("renders correctly", () => {
  const tree = renderer.create(
    <Index />
  )
})
