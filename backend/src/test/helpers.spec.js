import assert from 'assert'
import exampleAuditResult from './exampleAuditResult'

import extractClassNames from '../helpers/extractClassNames'
import extractMetaTags from '../helpers/extractMetaTags'
import fileNameFromUrl from '../helpers/fileNameFromUrl'
import normUrl from '../helpers/normUrl'
import testpointsToConfidence from '../helpers/testpointsToConfidence'
import verifyRecaptcha from '../helpers/verifyRecaptcha'

describe('helpers', function() {

  describe('extractClassNames', function() {
    it('reads body classnames', function() {
      assert.equal(extractClassNames(exampleAuditResult.data.body).body.length, 5)
    })
    it('reads all classnames', function() {
      assert.equal(extractClassNames(exampleAuditResult.data.body).all.length > 5, true)
    })
  })

  describe('extractMetaTags', function() {
    it('reads correctly', function() {
      assert.equal(extractMetaTags(exampleAuditResult.data.body).length > 2, true)
    })
  })

  describe('fileNameFromUrl', function() {
    it('outputs clean filename', function() {
      assert.equal(fileNameFromUrl('https://example.com/assets/source/file.jpg?23=ok&eh=0#3'), 'file.jpg')
    })
  })

  describe('normUrl', function() {
    it('creates uniform url', function() {
      assert.equal(normUrl('https://example.com/assets/#hello'), 'https://example.com/assets/')
    })
  })

  describe('testpointsToConfidence', function() {
    it('counts correctly', function() {
      assert.equal(testpointsToConfidence([
        {
          test: true,
          weight: 4
        },
        {
          test: false,
          weight: 2
        },
        {
          test: true,
          weight: 8
        },
      ], true), '85.71')
    })
  })

  describe('verifyRecaptcha', function() {
    it('sends recaptcha validation request', async function() {
      let req = await verifyRecaptcha('', true)
      assert.equal(req.success, true)
    })
  })

})
