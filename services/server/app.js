const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose   = require('mongoose');
const config = require('./config');
const bodyParser = require('body-parser');

const router = require('./routes');

mongoose.connect(config.database);

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.set('superSecret', config.secret);

app.use(router);

app.listen(port, () =>{
    console.log(`Server running on ${port}`);
})