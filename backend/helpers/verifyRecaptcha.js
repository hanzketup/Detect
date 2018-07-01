import fetch from 'node-fetch'
import FormData from 'form-data'
import fs from 'fs'

var keys
fs.readFile('./keys.json', 'utf8', function (err, data) {
  if (err) throw err
  keys = JSON.parse(data)
})

export default async (token) => {

  let reData = new FormData()
  reData.append('secret', keys.recaptcha_secret)
  reData.append('response', token)
  let recap = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    body: reData
  })

  return await recap.json()

}
