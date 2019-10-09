const getDb = require('../utils/database').getDb;
const mongodb = require('mongodb');

class Item{
    constructor(name,count,category,aisle,shelf){
        this.name = name;
        this.count = count;
        this.category = category;
        this.aisle = aisle;
        this.shelf = shelf;

    }
    save(){
        const db = getDb();
        db.collection('items').insertOne(this);
    }

    static fetchByCategory(catg){
        const db = getDb();
        return db.collection('items').find({category:[catg]})
        .next()
        .then(items =>{
            console.log(items)
            return items
        })
        .catch(err =>{
            throw err;
        });
    }
    static fetchByName(val){
        const db = getDb;
        return db.collection('items').find({name:val})
        .next()
        .then(items =>{
            console.log(items)
            return items
        })
        .catch(err =>{
            throw err;
        });
    }
    static fetchByAisle(val){
        const db = getDb;
        return db.collection('items').find({aisle:val})
        .next()
        .then(items =>{
            console.log(items)
            return items
        })
        .catch(err =>{
            throw err;
        });

    }
    static fetchByShelf(val){
        const db = getDb;
        return db.collection('items').find({shelf:val})
        .next()
        .then(items =>{
            console.log(items)
            return items
        })
        .catch(err =>{
            throw err;
        });
    }
}

module.exports = Item;