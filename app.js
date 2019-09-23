const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoConnect = require('./utils/database').mongoConnect;
const adminRoutes = require('./routes/admin');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));

 

app.use('/api', adminRoutes);

mongoConnect((client) => {
    console.log(client);
    app.listen(5000);
})