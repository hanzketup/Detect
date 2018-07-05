import assert from 'assert'
import {insert, findByUrl, deleteByUrl} from '../store'

describe('store', function() {
  it('can insert', async function() {
    await insert({
      name: 'TEST DATA REMOVE',
      request_url: 'http://example.com',
      audit_timestamp: Date.now()
    })
  })
  it('can findByUrl', async function() {
    let fbu = await findByUrl('http://example.com')
    assert.equal(fbu.length, 1)
  })
  it('can deleteByUrl', async function() {
    let dbu = await deleteByUrl('http://example.com')
    assert.equal(dbu, 'success')
  })
})
