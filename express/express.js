/* basic framework functions
 * 1、json and form body parser
 * 2、render engine
 * 3、cookie parser(express session included cookie parser)
 * 4、session(use memory store in benchmark mode,use redis store in production mode)
 * 5、static file module(only function in development mode,use nginx in production mode)
 * 6、multipart upload support
 */

'use strict';

const express = require('express');
const path = require('path');
const swig = require('swig');
const bodyParser = require('body-parser');
const session = require('express-session');
const multer = require('multer');

const app = express();

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

app.use('/',function(req, res){
  res.end('Hello World');
});

app.listen(3000);
