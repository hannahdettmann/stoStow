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
        return db.collection('items').insertOne(this);
    }

    static fetchDocuments(){
        const db = getDb()
        return db.collection('items').find({})
        .toArray()
        .then(items => {
            console.log(items);
            var fs = require('fs');
            var json = JSON.stringify(items);
            console.log(json);
            fs.writeFile('items.json',json,'utf-8', err =>{
            if (err) throw err;
            console.log('created file');
    });
          })
          .catch(err =>{
            console.log(err)
          });
    }
}

module.exports = Item;