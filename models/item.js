const getDb = require('../utils/database').getDb;
const mongodb = require('mongodb');

class Item{
    constructor(name,count,category,location){
        this.name = name;
        this.count = count;
        this.category = category;
        this.location = location;

    }
    save(){
        const db = getDb();
        return db.collection('items').insertOne(this)
        .then(item => {
            return item;
        })
        .catch(err => {
            console.log(err);
        });
    }

    static fetchDocuments(){
        const db = getDb()
        return db.collection('items').find({})
        .toArray()
        .then(items => {
            var json = JSON.stringify(items);
            console.log(json);
            return json;
        })
          .catch(err =>{
            console.log(err)
          });
    }
}

module.exports = Item;