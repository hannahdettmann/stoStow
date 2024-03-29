const getDb = require('../utils/database').getDb;
const mongodb = require('mongodb');

class Report{
    constructor(name,email,message){
        this.name = name;
        this.email = email;
        this.message = message;
    }
    save(){
        const db = getDb();
        return db.collection('reports').insertOne(this)
        .then(message =>{
            return message;
        })
        .catch(err => {
            console.log(err);
        });
    }
}

module.exports = Report;