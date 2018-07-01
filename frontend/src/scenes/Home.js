import React from "react";
import styled from 'styled-components';

import Title from '../containers/Title'
import RequestBar from '../containers/RequestBar'
import Summary from '../containers/Summary'
import Qualifiers from '../containers/Qualifiers'
import Consent from '../containers/Consent'
import ReCaptcha from '../containers/ReCaptcha'

import Notice from '../components/Notice'

const Page = styled.div`
  height: 100%;
  width: 100%;
  background: #525252; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #525252, #3d72b4); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #525252, #3d72b4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const PageWrap = styled.div`
  min-height: 100vh;
  width: 100%;
  padding-top: 26vh;

  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  background-image: ${x => x.theme.patterns.peak};
`

const ResultBoxes = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`

export default props =>
  <div>
    <Notice />
    <Page>
      <PageWrap>

        <Title />
        <RequestBar />

        <ResultBoxes>
            <Summary />
            <Qualifiers />
        </ResultBoxes>
        
      </PageWrap>
    </Page>

    <ReCaptcha />
    <Consent />

  </div>
