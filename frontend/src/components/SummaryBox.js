import React from "react"
import styled from 'styled-components'

import InnerBox from '../components/InnerBox'

const Emblem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  font-size: 1.5rem;
  color: #eee;
  height: 3.5rem;
  width: 6rem;
  border-radius: 3px 0 0 3px;

  background: ${x => x.gradient};
  //box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.04), inset -2px -2px 4px rgba(0, 0, 0, 0.04);
  > svg{margin: 0 auto 0 1.1rem}

  &::after{
  content: '';
  position: absolute;
  right: -4rem;
  bottom: -2rem;
  z-index: 0;
  background: white;
  height: 150%;
  width: 120%;
  transform: rotate(-65deg);
}
`

const Text = styled.div`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  > h2{
    font-size: 1.05rem;
    font-weight: normal;
    text-transform: capitalize;
    margin: 0;
  }
  > small{
    font-size: 0.65rem;
  }
`


export default props =>
  <InnerBox clickable={props.clickable} click={props.click}>
    <Emblem size={props.iconSize} gradient={props.gradient}>
      <i className={props.icon}></i>
    </Emblem>
    <Text>
      <h2>{props.title}</h2>
      <small>{props.small}</small>
    </Text>
  </InnerBox>
