import fs from 'fs'
import path from 'path'
import utils from './utils'
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
    results.map(result => result['confidence'] = testpointsToConfidence(result.testpoints).toFixed(2))
    return results
  } else {
    let qual = reload('./qualifiers/' + qualifier).default
    let result = await qual(utils, data)
    return {
      ...result,
      confidence: testpointsToConfidence(result.testpoints).toFixed(2)
    }
  }


}

const testpointsToConfidence = (testpoints) => {
  let totalWeight = testpoints.reduce((val, point) => val + point.weight, 0)
  let share = 1000 / totalWeight
  return testpoints.reduce((val, point) => {
    let calcedWeight = point.weight / Math.pow(10, 1)
    let artificalDoubt = Math.random() // Because ints are too Chad
    return point.test
    ? val + ((share * calcedWeight) - artificalDoubt)
    : val
  }, 0)
}
