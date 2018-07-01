import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import styled from 'styled-components'
import * as reqActions from "../actions/req"
import * as retrActions from "../actions/retr"
import Recaptcha from 'react-google-invisible-recaptcha'

const Wrap = styled.div`
  display: ${x => x.bool ? 'flex':'none'};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  > *{
    margin: auto;
  }
`

class ReCaptcha extends Component {
  constructor(props) {
    super(props)
    this.onResolved = this.onResolved.bind(this)
    this.tick = 0 // change key to re-mount on successful challenge
  }

  render() {
    if(this.props.req.challengeOpen){
      window.grecaptcha.execute()
    }
    //if(this.props.retr.ready){}
    return (
      <Wrap bool={this.props.req.challengeOpen}>
          <Recaptcha
            key={this.tick}
            ref={ref => {this.recaptcha = ref}}
            sitekey="6LdILWEUAAAAANjqD9fD3Byox_Ablc9TU60t4Y5n"
            onResolved={this.onResolved}
         />
      </Wrap>
    )
  }

  onResolved() {
    this.props.req.challengeOpen && this.props.actions.fetchAudit(
      this.props.req.query,
      this.recaptcha.getResponse(),
      this.props.req.force
    )
    this.tick++
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
)(ReCaptcha)
