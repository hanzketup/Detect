import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Cookies } from 'react-cookie'
import * as Actions from "../actions/consent"

import Overlay from '../components/Overlay'
import Prompt from '../components/Prompt'

class Consent extends Component {

  render() {
    return (
      this.props.state.show_prompt &&
      <Overlay>
        <Prompt
          title={'Before you get started...'}
          text={'This site uses cookies to enhance your experience. This site may also store your IP to prevent misuse and abuse. By clicking ok you confirm that you have read and accepted the statment above.'}
          confirm={'Ok'}
          onConfirm={() => this.props.actions.confirm()}
          cancel={'Exit'}
          onCancel={() => window.history.back()}
        />
      </Overlay>
    )
  }

  componentDidMount() {
    let cookies = new Cookies()
    !cookies.get('has_consented') && this.props.actions.show()
  }

}

const mapStateToProps = state => ({
  state: state.consent
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({...Actions}, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Consent)
