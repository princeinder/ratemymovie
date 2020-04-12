var express=require('express');
var app=express();

var http=require('http');
var path = require('path');

var server=http.createServer(app);
var createError = require('http-errors');
var cors=require('cors');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var crypto=require('crypto');
var jwt=require('jsonwebtoken');
var multer = require('multer');
var config=require('./config');


var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './public/api/uploads')
  },
  filename: function(req, file, cb){
    cb(null, Date.now()+"."+file.originalname.split('.').pop());
}});


const upload = multer({
  storage: storage
});


app.use(express.static('public'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./bin/conn')(mongoose,server,config);
require('./models/user')(mongoose,crypto,jwt,config.secret);
require('./models/movie')(mongoose);
require('./models/category')(mongoose);
require('./models/vote')(mongoose);
require('./models/review')(mongoose);
require('./routes/api')(app,upload);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

app.use(function(req, res, next) {
    next(createError(404));
  });

