const MongoClient = require('mongodb').MongoClient;

let db
const url = 'mongodb://localhost:27017'
MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
  db = client.db('detect')
})

const insert = data => {
  db.collection('recorded_audits').insertOne(data, (err, res) => {
    if (err) throw err
  })
}

const findByUrl = url => {
  return new Promise((resolve, reject) => {
    db.collection('recorded_audits')
    .find({request_url:url})
    .sort({"audit_timestamp": -1})
    .limit(1)
    .toArray((err, res) => {
      if (err) reject(err)
      resolve(res)
    })
  })
}

const deleteByUrl = url => {
  return new Promise((resolve, reject) => {
    db.collection('recorded_audits')
    .deleteOne({request_url: url}, (err, obj) => {
      if (err) reject(err)
      resolve('success')
    })
  })
}

export {insert, findByUrl, deleteByUrl}
