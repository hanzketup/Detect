const MongoClient = require('mongodb').MongoClient;

let db
const url = 'mongodb://localhost:27017'
MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
  db = client.db('detect')
})

const insert = data => {
  db.collection('recorded_audits').insertOne(data, (err, res) => {
    if (err) throw err
    console.log(`Result inserted for: ${data.request_url}`)
  })
}

const findByUrl = url => {
  return new Promise((resolve, reject) => {
    db.collection('recorded_audits').find({request_url:url}).toArray((err, res) => {
      if (err) reject(err)
      resolve(res[0])
    })
  })
}

export {insert, findByUrl}
