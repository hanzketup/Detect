import fs from 'fs'
import path from 'path'
import utils from './utils'
import testpointsToConfidence from './helpers/testpointsToConfidence'
const reload = require('require-reload')(require)

// Collect qualifiers
let indexedQualifiers = []
fs.readdirSync(path.join(__dirname, '/qualifiers/')).forEach(file => {
  let qual = require('./qualifiers/' + file).default
  indexedQualifiers.push(qual)
})

export default async (data, qualifier='all') => {

  if(qualifier === 'all') {
    let results = await Promise.all([...indexedQualifiers.map(i => i(utils, data))])
    results.map(result => result['confidence'] = testpointsToConfidence(result.testpoints))
    return results
  } else {
    let qual = reload('./qualifiers/' + qualifier).default
    let result = await qual(utils, data)
    return {
      ...result,
      confidence: testpointsToConfidence(result.testpoints)
    }
  }


}
