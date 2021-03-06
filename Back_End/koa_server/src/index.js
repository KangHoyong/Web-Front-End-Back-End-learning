require('dotenv').config(); // .env 파일에서 환경변수 불러오기

const Koa = require('koa');
const Router = require('koa-router');

// 10.6 add 
const app = new Koa();
const router = new Router();
const api = require('./api');

// 10.5 add 
const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');

mongoose.Promise = global.Promise; // Node 의 네이티브 Promise 사용
// mongodb 연결
mongoose.connect(process.env.MONGO_URI, {
  useMongoClient: true
}).then(
    (response) => {
        console.log('Successfully connected to mongodb');
    }
).catch(e => {
    console.error(e);
    console.log('fall~~~!!! ') ; 
});

const port = process.env.PORT || 4000; // PORT 값이 설정되어있지 않다면 4000 을 사용합니다.

app.use(bodyParser()); // 바디파서 적용 라우터 적용코드 보다 상단에 위치해야함 

router.use('/api', api.routes()); // api 라우트를 /api 경로 하위 라우트로 설정

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log('heurm server is listening to port ' + port);
});

app.use(async ctx => {
    // 아무것도 없으면 {} return 
    ctx.body = ctx.request.body;
});

/*
//10.6 aa SHA256 해시 함수 사용
const crypto = require('crypto');

const password = 'jess1130';
const secret = 'MyScretKey123';

const hashed = crypto.createHmac('sha256' , secret).update(password).digest('hex');

console.log(hashed);

*/