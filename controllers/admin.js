const Report = require('../models/report');
const Item = require('../models/item');
exports.postSendReport = (req,res, next) =>{
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    const report = new Report(name,email,message);
    return report.save()
    .then(result => {
        console.log(result);
        res.redirect('/report');
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
};
exports.postItem = (req,res,next) => {
    const name = req.body.name;
    const count = req.body.count
    const category = req.body.category;
    const aisle = req.body.aisle;
    const shelf = req.body.shelf;

    const item = new Item(name,count,category,aisle,shelf);
    return item.save()
    .then(result => {
        console.log(result);
        res.redirect('/add');
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
};


