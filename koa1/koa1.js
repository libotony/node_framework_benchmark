/* basic framework functions
 * 1、json and form body parser
 * 2、render engine
 * 3、cookie parser(koa itself included cookie parser)
 * 4、session(use memory store in benchmark mode,use redis store in production mode)
 * 5、static file module(only function in development mode,use nginx in production mode)
 * 6、multipart upload support
 */
'use strict';

const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const mount = require('koa-mount');
const serve = require('koa-static');
const session = require('koa-generic-session');
const path = require('path');
const multer = require('koa-multer');
const views = require('koa-views');
const router = require('koa-router')();
const koaBody   = require('koa-body');

const app = koa();

app.use(mount('/static',serve(path.join(__dirname,'../static'))));

app.use(bodyParser());

app.use(multer({
  dest: '../static/uploads/',
  rename: function () {
    return Math.random() + new Date().getTime();
  }
}));

app.use(views(path.join(__dirname + '../views'), {
  map: {
    html: 'nunjucks'
  }
}));

app.use(session());

router.get('/', function *(next) {
  yield next;
  this.body = 'Hello World';
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
