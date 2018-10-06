const Router = require('koa-router');

const api = new Router();
const books =require('./books'); // 경로 지정 
const auth = require('./auth'); // 경로 지정


/*
api.get('/books' , (ctx, next) =>{
    ctx.body = 'GET ' + ctx.request.path;
});
*/

api.use('/books' , books.routes());
api.use('/auth' , auth.routes());

module.exports = api;
