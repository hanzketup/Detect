import React from "react"
import styled from 'styled-components'

const Row = styled.input`
  width: 40rem;
  font-size: 1.2rem;
  font-weight: 400;
  padding: 0.8rem 1.4rem;
  border: 1px solid #d1d1d0;
  border-radius: 3px;
  @media (max-width: 780px) {
    font-size: 1.1rem;
    width: 100%;
  }
`

export default props => {
  return (
    <Row
      type="text"
      disabled={!props.enabled}
      onKeyUp={(event) => props.update(event.target.value)}
      onKeyPress={(e) => e.key === 'Enter' && props.onEnter()}
      placeholder="Enter url to be tested"
    />
  )
}
