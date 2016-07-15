'use strict';

var express = require('express');
var path = require('path');
var swig = require('swig');
var bodyParser = require('body-parser');
var session = require('express-session');
var multer = require('multer');

var app = express();

// hang static files
app.use('/static', express.static(path.join(__dirname,'../static')));

// hang req.body parser
app.use(bodyParser.json({ limit: '5mb' })); //for parsing application/json
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true })); //for parsing application/x-www-form-urlencoded

// hang upload
app.use(multer({
  dest: '../static/uploads/',
  rename: function () {
    return Math.random() + new Date().getTime();
  }
}).any());

// hang swig
swig.setDefaults({ cache: 'memory' });
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '../views'));

// hang express-session and cookieParser(since included)
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.use(function(req, res){
  (new Promise(function(resolve) {
    resolve(new Buffer('Hello World'));
  })).then(function(result){
    return res.end(result);
  });
});

app.use(function (req, res) {
  return res.status(404).render('base/40x');
});

app.use(function (error, req, res) {
  console.error(error);
  return res.status(500).render('base/50x');
});

app.listen(3000);
