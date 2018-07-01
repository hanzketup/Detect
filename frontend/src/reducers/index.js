import { combineReducers } from "redux"

import req from './req'
import retr from './retr'
import title from './title'
import consent from './consent'

const rootReducer = combineReducers({
  req:req,
  retr: retr,
  title: title,
  consent: consent
})

export default rootReducer
