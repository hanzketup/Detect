import now from 'performance-now'
import sizeof from 'object-sizeof'

import {insert, findByUrl} from './store'
import normUrl from './helpers/normUrl'
import audit from './audit'
import qualify from './qualify'

export default async (req, store=true) => {
  let start = now()
  let auditTime = Date.now()
  await audit.begin(req.device)
  let cleanUrl = normUrl(req.url)

  let auditResult
  try{auditResult = await audit.runAudit(cleanUrl)}
  catch(e){return {status: 'failed', message: 'Audit failed hard'}}

  if(auditResult.status !== 'finished'){return {status: 'failed', message: 'Audit failed softly'}}

  let qualifyResult
  try{qualifyResult = await qualify(auditResult.data)}
  catch(e){return {status: 'failed', message: 'Something went wrong during qualification'}}

  await audit.end()
  let end = now()

  let compl = {
    status: 'success',
    request_url: req.url,
    request_ip: req.ip,
    audit_timestamp: auditTime,
    exec_time: (end-start).toFixed(2),
    size: sizeof(qualifyResult),
    result: qualifyResult,
    misc: {
      security: auditResult.data.security,
      request_nr: auditResult.data.resources.length,
      cookie_nr: auditResult.data.cookies.length,
      worker_nr: auditResult.data.workers.length
    }
  }

  insert(compl)
  return compl

}
