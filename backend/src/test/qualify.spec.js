import assert from 'assert'
import audit from '../audit'
import qualify from '../qualify'

describe('qualify', function() {
  it('can run all qualifiers', async function() {
    await audit.begin()
    let auditRes = await audit.runAudit('https://example.com/')
    let qualRes = await qualify(auditRes.data)
    await audit.end()
    return qualRes
  })
})
