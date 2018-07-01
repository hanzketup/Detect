import fs from 'fs'
import audit from './audit'
import qualify from './qualify'

(async (url, done) => {
  await audit.begin()
  let auditResult = await audit.runAudit(url)
  if(auditResult.status === 'finished'){
    let qualifyResult = await qualify(auditResult.data)
    await audit.end()
    return done(null, qualifyResult)
  }
  else{
    return done(err)
  }
})('http://blackpeoplemeet.com/', ()=>{})
