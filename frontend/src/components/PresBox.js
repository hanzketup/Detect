import React from "react"
import styled from 'styled-components'

const Box = styled.div`
  position: relative;
  overflow: hidden;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 20rem;
  background: #fff;
  padding: 0.8rem;
  margin: 2rem;
  margin-bottom: 0;
  border-radius: 6px;
  box-shadow: ${x => x.theme.shadows.primary};
  ${x => x.title && `padding-top: 2rem`}
  &:last-child{margin-bottom: 3rem;}

  transition: margin 0s;
  transition: padding 0s;
  transition: 0.6s ease;
  > *{transition: 0.2s;}
  ${x => x.show
    ? 'max-height: 50rem transform: translateY(0rem); opacity: 1;  > *{opacity: 1}'
    : 'max-height: 0rem; transform: translateY(10rem); opacity: 0; position:absolute; > *{opacity: 0}'
  }

`

const Title = styled.h2`
  position: absolute;
  top: 0.5rem;
  left: 1rem;
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


export default props => {
  return (
    <Box show={props.show} title={props.title}>
      {props.title && <Title>{props.title}</Title>}
      {props.children}
    </Box>
  )
}
