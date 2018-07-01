import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import styled from 'styled-components'
import * as reqActions from "../actions/req"
import * as retrActions from "../actions/retr"

import Title from '../components/Title'

const Wrap = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
`

class TitleCont extends Component {

  render() {
    return (
      <Wrap>
        <Title
          title={this.props.title.mainTitle}
          sub={this.props.title.subTitle}
        />
      </Wrap>
    )
  }

}

const mapStateToProps = state => ({
  title: state.title
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...retrActions, ...reqActions}, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleCont)
