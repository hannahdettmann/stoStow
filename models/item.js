const getDb = require('../utils/database').getDb;
const mongodb = require('mongodb');

class Item{
    constructor(name,count,category,aisle,shelf,isChecked){
        this.name = name;
        this.count = count;
        this.category = category;
        this.aisle = aisle;
        this.shelf = shelf;
        this.isChecked = isChecked

    }
    save(){
        const db = getDb();
        db.collection('items').insertOne(this);
    }
}

module.exports = Item;