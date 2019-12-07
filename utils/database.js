const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;
const uri =   "mongodb://localhost:27017/launch";
const mongoConnect = (callback) => {
MongoClient.connect(uri)
  .then(client => {
    console.log('Connected!');
    _db = client.db('launch');
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