import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import styled from 'styled-components'
import * as reqActions from "../actions/req"
import * as retrActions from "../actions/retr"

import RequestField from '../components/RequestField'
import RequestButton from '../components/RequestButton'

const Wrap = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;

  background: #fff;
  padding: 0.8rem;
  border-radius: 6px;
  box-shadow: ${x => x.theme.shadows.primary};

  @media (max-width: 780px) {
    padding: 0.6rem;
  }
`

class RequestBar extends Component {
  constructor(props) {
    super(props)
    this.tick = 0
  }

  render() {
    return (
      <Wrap>

        <RequestField
          enabled={this.props.req.inputEnabled}
          update={this.props.actions.updateQuery}
          onEnter={() => this.props.req.submitEnabled &&
            this.props.actions.launchChallenge()
          }
        />

        <RequestButton
          enabled={this.props.req.submitEnabled}
          click={() => this.props.actions.launchChallenge()}
        />

      </Wrap>
    )
  }

  onKeyPress(e) {
   if(e.key === 'Enter'){
     console.log('enter')
   }
  }

}

const mapStateToProps = state => ({
  req: state.req,
  retr: state.retr
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...retrActions, ...reqActions}, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestBar)
