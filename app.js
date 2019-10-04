const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoConnect = require('./utils/database').mongoConnect;
const adminRoutes = require('./routes/admin');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/api', adminRoutes);

mongoConnect((client) => {
    console.log(client);
    app.listen(27017);
})