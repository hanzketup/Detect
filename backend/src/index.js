import express from 'express'
import cors from 'cors'
import path from 'path'

import queue from './queue'
import {findByUrl} from './store'
import verifyRecaptcha from './helpers/verifyRecaptcha'
import normUrl from './helpers/normUrl'

var app = express()
app.use(express.json())
app.use(cors())

app.post('/audit', async (req, res) => {
  let ver = await verifyRecaptcha(req.body.token)

  if(ver.success) {
    let cleanUrl
    try{cleanUrl = normUrl(req.body.url)}
    catch(e){res.send({status: 'failed', message: 'Could not read url'})}

    let stored = await findByUrl(cleanUrl)
    let force = req.body.force

    if(stored && !force){
      res.send({...stored, cached:true})
    }
    else{
      let audit = await queue({
        url: cleanUrl,
        device: req.body.device,
        ip: req.headers['x-forwarded-for'],
      })
      res.send({...audit, cached:false})
    }
  }
  else{res.send({status: 'failed', message: 'ReCaptcha verification failed'})}
})

//if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../frontend/build')))

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'))
  })
//}


app.listen(2000)
