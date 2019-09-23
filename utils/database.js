const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
MongoClient.connect(
    'mongodb+srv://carlso16:kDwc59mSbr8ht93d@cluster0-7zbn4.mongodb.net/STOrage?retryWrites=true&w=majority',
    
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