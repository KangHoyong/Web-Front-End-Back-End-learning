// Root 컴포넌트를 만들어서 BrowserRouter 를 통해 라우터를 구성
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

import { Provider } from 'react-redux';

const Root = ({store}) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route path="/" component={App}/>
            </BrowserRouter>
        </Provider>
    );
};
//Provider 를 최상위 컴포넌트로 설정하고 props 로 전달받은 store 를 넣으세요.



export default Root;