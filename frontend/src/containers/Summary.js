import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as reqActions from "../actions/req"
import * as retrActions from "../actions/retr"

import PresBox from '../components/PresBox'
import SummaryBox from '../components/SummaryBox'

class Summary extends Component {

  render() {
    return (
      <PresBox show={this.props.retr.ready} title={'Summary'}>

        <SummaryBox
        clickable={false}
        title={this.props.retr.status + "!"}
        small={"Audit took " + this.props.retr.exec_time + "ms"}
        gradient="#33d9b2"
        icon="fal fa-check"
        />

        { this.props.retr.misc.security &&
          <SummaryBox
          clickable={false}
          title={this.props.retr.misc.security.protocol + " Security "}
          small={this.props.retr.misc.security.issuer.substring(0,28) + "..."}
          gradient="#74b9ff"
          icon="fal fa-lock-alt"
          />
        }

        <SummaryBox
        clickable={false}
        title={this.props.retr.misc.request_nr + " Requests"}
        small={"made during audit"}
        gradient="#a29bfe"
        icon="fal fa-magnet"
        />

        <SummaryBox
        clickable={false}
        title={this.props.retr.misc.cookie_nr + " Cookies Set"}
        small={this.props.retr.misc.worker_nr + " Service Workers ran"}
        gradient="#fab1a0"
        icon="fal fa-anchor"
        />

        { this.props.retr.cached &&
          <SummaryBox
          clickable={true}
          click={() => {
            this.props.actions.forceAudit(true)
            this.props.actions.launchChallenge()
          }}
          title="From Cache"
          small={new Date(this.props.retr.audit_timestamp).toLocaleDateString() + " · Click to redo"}
          gradient="#636e72"
          icon="fal fa-history"
          />
        }

      </PresBox>
    )
  }

  cachedForce() {
    console.log('clicked')
    this.props.actions.forceAudit(true)
    this.props.actions.launchChallenge()
  }

}

const mapStateToProps = state => ({
  retr: state.retr
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...retrActions, ...reqActions}, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summary)

/*
this.props.actions.forceAudit(true)
this.props.actions.launchChallenge()
*/
