import assert from 'assert'
import utils from '../utils'

describe('utils', function() {

  describe('hasAtleast', function() {
    it('returns false on under', function() {
      assert.equal(utils.hasAtleast([true, true, false, false], 3), false)
    })
    it('returns true on exact', function() {
      assert.equal(utils.hasAtleast([true, true, true, false], 3), true)
    })
    it('returns true on over', function() {
      assert.equal(utils.hasAtleast([true, true, true, false], 2), true)
    })
  })

  describe('splitUrl', function() {
    it('return clean subdomain', function() {
      assert.equal(utils.splitUrl('http://sub.example.com/path/to/').subdomain, 'sub')
    })
    it('return clean domain', function() {
      assert.equal(utils.splitUrl('http://sub.example.com/path/to/').domain, 'sub.example.com')
    })
    it('return clean path', function() {
      assert.equal(utils.splitUrl('http://sub.example.com/path/to/').path, '/path/to/')
    })
  })

  describe('getComments', function() {
    it('gets single line comment', function() {
      assert.equal(utils.getComments('should not be included //sucessful')[0], '//sucessful')
    })
    it('gets multi line comment', function() {
      assert.equal(utils.getComments('should not /* successful */ be included')[0], '/* successful */')
    })
  })

})
