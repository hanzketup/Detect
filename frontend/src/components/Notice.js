import React from "react"
import styled from 'styled-components'

const Wrap = styled.div`
  font-family: 'Open Sans', sans-serif;
  position: absolute;
  top: 1rem;
  right: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled.div`
  font-family: 'Open Sans', sans-serif;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 3rem;
  background: #fff;
  border-radius: 3px;
  padding: 0.4rem;
  margin: 0 0.5rem;
  box-shadow: ${x => x.theme.shadows.secondary};

  p{
    font-size: 0.8rem;
    margin: 0 0.3rem;
  }
  svg{
    color: #333;
    padding: 0.5rem;
    font-size: 2.5rem;
  }

`

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem 1.5rem;
  line-height: 1;
  border: 0;
  font-size: 0.8rem;
  font-weight: normal;
  margin: 0 0.5rem;
  margin-right: 0;
  border-radius: 3px;
  color: #eee;
  background: ${x => x.color};
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s ease;
  &:hover{
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15), -1px -1px 4px rgba(0, 0, 0, 0.15);
  }
`

export default props => {
  return (
    <Wrap>

      <Box>
        <a href="https://github.com/hanzketup/Detect" target="_blank">
          <i className="fab fa-github"></i>
        </a>
      </Box>

      <Box>
        <p>Need a dev?</p>
        <Button href="https://www.upwork.com/o/profiles/users/_~01a2afee99d944b339/" target="_blank" color="#1dd1a1">Hire me</Button>
      </Box>

    </Wrap>
  )
}
