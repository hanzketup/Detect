import React from "react"
import styled from 'styled-components'

const Box = styled.div`
  display:flex;
  flex-direction: ${x => x.column && 'column'};
  justify-content:space-between;
  align-items:center;

  width: 100%;
  background: #fff;
  padding: 0.5rem 0.5rem;
  margin-bottom: 0.4rem;
  border: 1px solid #d1d1d0;
  border-radius: 3px;
  //box-shadow: ${x => x.theme.shadows.secondary};
  &:last-child{margin-bottom:0}

  ${x =>
    x.clickable && `
      cursor: pointer;
      transition: 0.3s ease;
      &:hover{
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15),
        -1px -1px 4px rgba(0, 0, 0, 0.15);
      }
    `
  }

`


export default props => {
  return (
    <Box clickable={props.clickable} onClick={props.click} column={props.column}>
      {props.children}
    </Box>
  )
}
