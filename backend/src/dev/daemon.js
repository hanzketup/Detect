import nodemon from 'nodemon'
const argv = require('yargs').argv

import audit from '../audit'
import qualify from '../qualify'
import queue from '../queue'
import {findByUrl} from '../store'
import normUrl from '../helpers/normUrl'

(async (url, qualifier) => {
  if(!url || !qualifier){
    console.log('Missing args')
    return 0
  } else{console.log(`Started with url: ${url} and qualifier: ${qualifier}`)}

  await audit.begin()
  let ar = await audit.runAudit(url)

  nodemon({ script: `../backend/src/qualifiers/${qualifier}.js` })
  .on('restart', async () => {
    try{console.log(
      JSON.stringify(
        await qualify(ar.data, qualifier), null, 2)
      )
    } catch(e){console.log(`Failed: ${e}`)}
    console.log('\n --- \n')
  })

  nodemon.emit('restart')
})(argv.url, argv.qualifier)
