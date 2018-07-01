import React from "react"
import styled from 'styled-components'

const Disable = styled.div`
  border-radius: 50%;
  margin:0 0.8rem 0 1.5rem;
  transition: 0.4s ease;
  opacity: ${x => x.status ? 1 : 0.4};
  @media (max-width: 780px) {
    padding: margin:0 0.5rem 0 0.5rem;;
  }
`

const Submit = styled.button`
  height: 3rem;
  width: 3rem;
  background: linear-gradient(to right, #ffe259, #ffa751);
  border:none;
  border-radius: 50%;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2), -1px -1px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  color: white;
  font-size: 1.8rem;
  outline: none;
  > svg{
    margin-bottom: -0.1rem;
    transition: 0.3s ease;
    &:hover{
      transform:${x => x.status ? ' rotate(-90deg)' : ''};
    }
  }
`

export default props => {
  return (
    <Disable status={props.enabled}>
      <Submit onClick={() => props.enabled ? props.click() : null} status={props.enabled}>
        <i className="fal fa-arrow-circle-right"></i>
      </Submit>
    </Disable>
  )
}
