import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import styled from 'styled-components'
import * as reqActions from "../actions/req"
import * as retrActions from "../actions/retr"

import PresBox from '../components/PresBox'
import QualifierRow from '../components/QualifierRow'

const Label = styled.p`
  width: 100%;
  text-align: center;
  margin: 0.5rem 0;
`

class Qualifiers extends Component {

  render() {
    return (
      <PresBox show={this.props.retr.ready} title={'Result'}>
        { this.props.retr.result
          .filter(i => i.confidence > 20)
          .map(i =>
            <QualifierRow
              key={i.name}
              name={i.name}
              value={i.info.value}
              confidence={i.confidence}
              info={i.info}
              testpoints={i.testpoints}
            />
          )
        }

        { this.props.retr.result
          .filter(i => i.confidence > 20)
          .length === 0
          && <Label>No Matches</Label>
        }

      </PresBox>
    )
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
)(Qualifiers)
