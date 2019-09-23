const Report = require('../models/report');

exports.postSendReport = (req,res, next) =>{
    const name = req.body.name;
    const email = req.body.name;
    const message = req.body.name;

    const report = new Report(name,email,message);
    report.save()
    .then(result => {
        console.log('Created Product');
    })
    .catch(err => {
        console.log(err);
    });
};