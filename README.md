# Web Back_End 

### 앞단 리엑트 뒷단 koa / (node.js)

1. 회원가입 / 로그인 API 만들기 

회원인증 시스템에서는, 이메일 로그인과, 페이스북, 구글을 사용한 소셜로그인 기능을 구현 할 것인데요, 이번 강의에선 이메일 회원인증을 먼저 구현하도록 하겠습니다.

이메일 회원인증 (앞으로 로컬인증이라고 부르겠습니다) 을 구현하기 위해선 다음 API 들을 만들어주어야 합니다.

POST /api/register/local: 회원가입 API
POST /api/login/local: 로그인 API
GET /exists/:key/:value: 이메일 / 아이디 중복확인
POST /logout: 로그아웃

2. JWT 이해 및 적용 

토큰 기반 인증 시스템



