// 추후 함수 

const Joi = require('Joi');
const Account = require('../../models/Account');



// local Register
exports.localRegister = async (ctx) => {
    // 데이터 검증
    const schema = Joi.object().keys({
        username: Joi.string().alphanum().min(4).max(15).required(),
        email: Joi.string().email().required(),
        password: Joi.string().required().min(6)
    });

    const result = Joi.validate(ctx.request.body, schema);

    if(result.error) {
        ctx.status = 400; // Bad Request 
        return;
    }

    /* TODO: 아이디 / 이메일 중복처리 구현 */
    let existing = null;
    try {
        existing = await Account.findByEmailOrUsername(ctx.request.body);
    } catch (e) {
        ctx.throw(500,e);
    }

    if(existing){
        // 중복되는 아이디 / 이메일이 있을 경우
        ctx.status = 409 ; // Conflict
        // 어떤 녀석이 중복 값인지 알려주고 있습니다. 
        ctx.body = {
            key: existing.email === ctx.request.body.email  ? 'email' : 'username'
        };
        return;
    }


    // 계정 생성
    let account = null;
    try {
        account = await Account.localRegister(ctx.request.body);
    } catch (e) {
        ctx.throw(500, e);
    }

    ctx.body = account.profile; // 프로필 정보로 응답합니다.
};

// local login 
exports.localLogin = async (ctx) => {
    //ctx.body = 'login' ;

    // 데이터 검증 
    const schema = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });

    const result = Joi.validate(ctx.request.body, schema);

    if(result.error)
    {
        ctx.status = 400; // Bad Requst 
        return;
    }

    const {email, password} = ctx.request.body;

    let account = null;
    try {
        // 이메일로 계정 찾기 
        account = await Account.findByEmail(email);
    } catch (e) {
        ctx.throw(500, e);
    }

    if(!account || !account.validatePassword(password)){
        // 유자가 존재 하지 않으면 || 비밀번호가 일치 하지 않으면 
            ctx.status = 403; // Forbidden
            return;
    }

    ctx.body = account.profile;
};

// 이메일 / 아이디 존재 유무 확인 
exports.exists = async (ctx) => {
    //ctx.body = 'exists' ;
    const {key , value } = ctx.params;
    let account = null;

    try {
        // key 에 따라 findByEmail 혹은 fienByUsername 을 실행 
        account = await(key === 'email' ? Account.findByEmail(value) : Account.findByUsername(value));
    } catch (e) {
        ctx.throw(500, e) ; 
   }
   
   ctx.body = {
        exists: account !== null
   };

};

// logout 
exports.logout = async (ctx) => {
    ctx.body = 'logout' ;
};
