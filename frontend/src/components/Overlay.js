import React from "react"
import styled from 'styled-components'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
`

export default props => {
  return (
    <Overlay>
      {props.children}
    </Overlay>
  )
}
