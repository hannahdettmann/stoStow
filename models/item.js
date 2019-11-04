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
        db.collection('items').insertOne(this);
    }
    static fetchDocuments(){
        const db = getDb();
        return db.collection('items').find({})
            .then(result =>{
                console.log(result);
            })
            .catch(err => {
                console.log(err);
                throw err;
            });
    }


}

module.exports = Item;