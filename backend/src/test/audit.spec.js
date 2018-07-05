import assert from 'assert'
import audit from '../audit'

describe('Audit', function() {

  it('starts without crashing', async function() {
    await audit.begin()
  })

  it('runs successfully', async function() {
    this.timeout(5000)
    let audit_result = await audit.runAudit('https://example.com/')
    assert.equal(audit_result.status, 'finished')
  })

  it('ends without crashing', function() {
    audit.end()
  })

})
