import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { HashRouter  as Router, Route } from "react-router-dom"
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducer from './reducers/index'
import registerServiceWorker from './registerServiceWorker'
import theme from './style/theme'
import './style/global.css'
import Home from './scenes/Home'

const store = createStore(reducer, applyMiddleware(thunk))
window.store = store

const MainRouter = () =>
  <ThemeProvider theme={theme}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  </ThemeProvider>

  render(
    <Provider store={store}>
      <MainRouter />
    </Provider>,
    document.getElementById('root')
  )
registerServiceWorker();
