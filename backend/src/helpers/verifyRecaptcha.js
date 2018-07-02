import fetch from 'node-fetch'
import FormData from 'form-data'
import {recaptcha_secret} from '../keys'

export default async (token) => {

  let reData = new FormData()
  reData.append('secret', recaptcha_secret)
  reData.append('response', token)
  let recap = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    body: reData
  })

  return await recap.json()

}
