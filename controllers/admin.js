const Report = require('../models/report');
const Item = require('../models/item');
exports.postSendReport = (req,res, next) =>{
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    const report = new Report(name,email,message);
    report.save()
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
};
exports.postAddItem = (req,res,next) =>{
    const name = req.body.name;
    const count = req.body.count;
    const category = req.body.category;
    const aisle = req.body.aisle;
    const shelf = req.body.shelf;
    const isChecked = req.body.isChecked;

    const item = new Item(name,count,category,aisle,shelf,isChecked);
    item.save().then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
        throw err;
    });

}