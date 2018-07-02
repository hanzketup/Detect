import fs from 'fs'
import path from 'path'
import utils from './utils'

// Collect qualifiers
let indexedQualifiers = []
fs.readdirSync(path.join(__dirname, '/qualifiers/')).forEach(file => {
  let qual = require('./qualifiers/' + file).default
  indexedQualifiers.push(qual)
})

export default async (data) => {
  let results = await Promise.all([...indexedQualifiers.map(i => i(utils, data))])
  results.map(result => result['confidence'] = testpointsToConfidence(result.testpoints).toFixed(2))
  return results
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
