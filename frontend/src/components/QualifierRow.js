import React from "react"
import styled from 'styled-components'

import InnerBox from '../components/InnerBox'
import QualifierBody from '../components/QualifierBody'

const Qual = styled.div`
  width: 100%;
  margin: 0.2rem;

  &:hover .subMenu{
    max-height: 15rem !important;
    *{opacity: 1}
  }

`

const Head = styled.div`
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

`

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 0.2rem;
  margin-left: 0.1rem;
  > h2{
    font-size: 1.1rem;
    font-weight: 400;
    margin: 0;
  }
  > small{
    color: #6c757d;
    margin: 0 0.2rem;
  }
`

const Perc = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  color: ${x => {
    return x.val > 70 ? x.theme.high
    :x.val > 50 && x.val < 70 ? x.theme.medium
    :x.val > 0 && x.val < 50 ? x.theme.low
    : x.theme.high
    }};
`

export default props =>
  <Qual>
    <InnerBox clickable={true} column>

      <Head>
        <Title>
          <h2>{props.name}</h2>
          <small>{props.value}</small>
        </Title>
        <Perc val={props.confidence}>{props.confidence}%</Perc>
      </Head>

      <QualifierBody info={props.info} testpoints={props.testpoints} />

    </InnerBox>
  </Qual>
