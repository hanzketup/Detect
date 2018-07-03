import React from "react"
import styled from 'styled-components'

const Body = styled.div`
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  margin-top: 0.4rem;
  padding: 0.4rem;
  background: #eee;
  border-radius: 3px;
  display: block;
  overflow: hidden;
  max-height: 0;
  transition: 0.6s ease;
  *{
    transition: 0.4s ease;
    opacity:0
  }
`

const TestPoint = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem;
  > p{
    color: #6c757d;
    font-size: 0.9rem;
    font-weight: normal;
    margin: 0.1rem 0;
  }
`

const Test = styled.div`
  color: ${x => x.bool ? x.theme.high : x.theme.low};
`

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::after{
    content: '';
    width: 30%;
    border-bottom: 1px solid #cbcbcd;
    margin: 0.4rem 0;
  }

  div{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem;
    b{
      font-size: 0.9rem;
      font-weight: normal;
      margin: 0.1rem 0;
    }
    p, a{
      color: #6c757d;
      font-size: 0.9rem;
      margin: 0;
    }
  }
`

const Meta = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #686de0 !important;
  div{
    padding-left: 0;
    padding-right: 0;
  }
`

export default props =>
  <Body className="subMenu">

    <Info>
      <div><b>type:</b><p>{props.info.type}</p></div>
      {props.info.url && <div><b>read more:</b><a href={props.info.url}>{props.info.url.substring(0, 10)}</a></div>}
      <Meta>
        {Object.keys(props.info.meta).map((key, index) => <div><b>{key}:</b><p>{props.info.meta[key]}</p></div> )}
      </Meta>
    </Info>

    {props.testpoints.map(i =>
      <TestPoint key={i.name}>
        <p>{i.name}</p>
        <Test bool={i.test}> {
          i.test === true
          ? <i className="fal fa-check-circle"></i>
          : <i className="fal fa-times-circle"></i>
        } </Test>
      </TestPoint>
    )}

  </Body>
