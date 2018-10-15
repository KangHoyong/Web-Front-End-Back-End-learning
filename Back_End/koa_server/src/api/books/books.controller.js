/*
각 메소드를 처리하는 함수를 따로 분리시켜서 작성 할 수도 있습니다. 라우트를 작성 할 때에는, 각 라우트에 해당하는 핸들러를 따로 작성하는것이 좋습니다. 그 이유는, 그렇게 해야 라우트들을 한눈에 보기 쉽기 때문이죠.

이제, 각 라우트에 대한 핸들러를 books 디렉토리에 books.controller.js 파일로 분리시켜보도록 하겠습니다.
*/
// list create delect replac update 

const Book = require('../../models/book');


exports.create = async (ctx) => {
    // request body 에서 값들을 추출합니다
    const { 
        title, 
        authors, 
        publishedDate, 
        price, 
        tags 
    } = ctx.request.body;

    // Book 인스턴스를 생성합니다
    const book = new Book({
        title, 
        authors,
        publishedDate,
        price,
        tags
    });

    // 만들어진 Book 인스턴스를, 이렇게 수정 할 수도 있습니다.
    // book.title = title;

    //.save() 함수를 실행하면 이 때 데이터베이스에 실제로 데이터를 작성합니다.
    // Promise 를 반환합니다.
    try {
        await book.save();
    } catch(e) {
        // HTTP 상태 500 와 Internal Error 라는 메시지를 반환하고, 
        // 에러를 기록합니다.
        return ctx.throw(500, e);
    }

    // 저장한 결과를 반환합니다.
    ctx.body = book;
};

exports.list = async (ctx) => {
    let books;
    try {
        // 데이터를 조회합니다. 
        // .exec() 를 뒤에 붙여줘야 실제로 데이터베이스에 요청이 됩니다.
        // 반환값은 Promise 이므로 await 을 사용 할 수 있습니다.
        books = await Book.find()
            .sort({_id: -1 }) // _id 역순 정렬 
            .limit(1) // 2개만 나오게 하기 
            .exec() // 서버 요청 
    } catch (error) {
        return ctx.throw(500, e);
    }
    ctx.body = books;
};



// 이렇게, exports.변수명 = ... 으로 내보내기 한 코드는, 파일을 불러올 때 다음과 같이 사용 할 수 있습니다.
// ex > const 모둘명 = require('파일명') ; 
//    > 모듈명.변수명 
/*

exports.delete = (ctx) => {
    ctx.body = 'deleted';
};

exports.replace = (ctx) => {
    ctx.body = 'replaced';
};

exports.update = (ctx) => {
    ctx.body = 'updated';
};

*/