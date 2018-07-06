import assert from 'assert'
import audit from '../audit'

describe('Audit', function(done) {

  it('starts without crashing', async function() {
    await audit.begin()
    done()
  })

  it('runs successfully', async function(done) {
    this.timeout(5000)
    let audit_result = await audit.runAudit('https://example.com/', true)
    assert.equal(audit_result.status, 'finished')
    done()
  })

  it('ends without crashing', function(done) {
    audit.end()
    done()
  })

})
