import React from "react"
import styled from "styled-components"
import { lighten } from "polished"

import withFetch from "./withFetch.js"
import { color } from "utils"

const red = color(255, 153, 153)

const theme = {
  ss: lighten(0.3, "#5A739C"),
  cc: lighten(0.3, "#58CA71"),
}

export const Panel = styled.div.attrs({
  className: "code f5 b black-60 pa3 pointer bb b--black-10",
})`
  background: ${props => (props.isError ? red(10) : props.color)};

  &:hover {
    background: ${props => (props.isError ? red(15) : props.color)};
  }
`

function RatePanel({ from, to, rate, error, handleClick, api, API }) {
  const isLoading = !!rate
  let message = isLoading ? `1 ${from} = ${rate} ${to}` : "Loading rate.."

  if (!!error) {
    message = `Error: ${error}`
  }

  return (
    <Panel onClick={handleClick} isError={!!error} color={theme[api]}>
      {message}
    </Panel>
  )
}

export default withFetch(RatePanel)
