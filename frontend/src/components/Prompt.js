import React from "react"
import styled from 'styled-components'

const Box = styled.div`
  font-family: 'Open Sans', sans-serif;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 25rem;
  background: #fff;
  border-radius: 3px;
  padding: 2rem 1.5rem 1.6rem 1.5rem;
  box-shadow: ${x => x.theme.shadows.primary};
`

const Title = styled.h2`
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  margin: 0;

  display: flex;
  flex-direction: column;

  color: #6c757d;
  font-size: 0.95rem;

  ${x => x.title && `padding-top: 1.5rem`}
  &:after{
    content:'';
    width: 1.8rem;
    margin-top: -0.08rem;
    border-bottom: 1px solid #cbcbcd;
  }

`

const Text = styled.p`
  font-size: 0.85rem;
  text-align: center;
  margin: 1.4rem 0 0.8rem 0;
`

const Button = styled.button`
  padding: 0.6rem 1.5rem;
  border: 0;
  font-size: 0.95rem;
  margin: 0 0.5rem;
  border-radius: 3px;
  color: #eee;
  background: ${x => x.color};
  cursor: pointer;
  transition: 0.3s ease;
  &:hover{
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15), -1px -1px 4px rgba(0, 0, 0, 0.15);
  }
`

export default props => {
  return (
    <Box>
      {props.title && <Title>{props.title}</Title>}
      <Text>{props.text}</Text>
      <div>
        <Button color="#00b894" onClick={props.onConfirm}>{props.confirm}</Button>
        <Button color="#e17055" onClick={props.oncancel}>{props.cancel}</Button>
      </div>
    </Box>
  )
}
