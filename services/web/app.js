const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const router = require('./routes');
const morgan = require('morgan');


//view engine
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

//configuration
app.use(express.static(__dirname + '/public'));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
//Allow origin(cors) middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(router);

app.listen(port, () =>{
    console.log(`Server running on ${port}`);
})