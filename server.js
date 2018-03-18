"use strict";
var config = require('./config.js');
var express = require('express');
var cors = require('cors');
var app = express();
GLOBAL.http = require('http').Server(app);
var bodyParser = require('body-parser');

require('./models/models.js')

//CONTROLLERS

var UserRouter = require('./controllers/User.js');


app.use(cors())
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));
app.use(bodyParser.json({limit: '50mb'}));

app.all('/*', function(req, res, next) {
  	res.setHeader('Access-Control-Allow-Origin', "*");
  	res.setHeader('Access-Control-Allow-Headers', "Content-Type");
  	res.setHeader('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
  	next();
});

app.use('/user', UserRouter);


app.get('/', function(req, res){
    res.send("welcome to recipe API");
    res.end();
});


// sequelize.sync({force: true}).then(() => {
//   });

var port = process.env.PORT || 8080;
app.listen(port, function(){
    console.log('listening on *:'+port);
});