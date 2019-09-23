const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
MongoClient.connect(
    "pls enter in uri string given in db",
    
)
  .then(client => {
    console.log('Connected!');
    _db = client.db();
    callback(client);
  })
  .catch(err => {
    console.log(err);
    throw err;
  });
};

const getDb = () => {
  if(_db){
    return _db;
  }
  throw 'No Database found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
