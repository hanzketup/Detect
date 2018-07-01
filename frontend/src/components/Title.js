import React from "react";
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  color: #eee;
  font-size: 8rem;
  font-weight: 400;
  margin: 0;
  @media (max-width: 780px) {
    font-size: 5rem;
  }
`
const SubTitle = styled.h2`
  color: #eee;
  font-size: 2rem;
  font-weight: 400;
  margin: 0 0 2rem 0;
  @media (max-width: 780px) {
    font-size: 1.2rem;
  }
`

export default props =>
  <Wrap>
    <Title>{props.title}</Title>
    <SubTitle>{props.sub}</SubTitle>
  </Wrap>
