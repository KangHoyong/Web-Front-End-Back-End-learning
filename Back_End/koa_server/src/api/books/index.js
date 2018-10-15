/*
REST API 에서는, 요청의 종류에 따라 다른 HTTP 메소드를 사용합니다. HTTP 메소드는 여러 종류가 있는데 그 중 주로 사용되는것들은 다음과 같습니다.
    * GET: 데이터를 가져올 때 사용합니다.
    * POST: 데이터를 등록 할 때 사용됩니다. 혹은, 인증작업을 거칠때도 사용됩니다.
    * DELETE: 데이터를 지울 때 사용됩니다.
    * PUT: 데이터를 교체 할 때 사용됩니다.
    * PATCH: 데이터의 특정 필드를 수정 할 때 사용됩니다.
라우터에서 각 메소드에 대한 요청을 준비 할 때는, .get, .post, .delete, .put, .patch 를 사용하면 됩니다.
*/

const Router = require('koa-router');

const books = new Router();

const booksCtrl = require('./books.controller');


books.get('/' , booksCtrl.list); 
books.post('/', booksCtrl.create);
//books.delete('/', booksCtrl.delete);
//books.put('/', booksCtrl.replace);
//books.patch('/', booksCtrl.update);


module.exports = books;
