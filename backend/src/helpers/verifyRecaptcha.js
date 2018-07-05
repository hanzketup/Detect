import fetch from 'node-fetch'
import FormData from 'form-data'
const test_secret = '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe'

export default async (token, test=false) => {
  let reData = new FormData()
  reData.append('secret', test ? test_secret : require('../keys').recaptcha_secret)
  reData.append('response', token)
  let recap = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    body: reData
  })

  return await recap.json()

}
