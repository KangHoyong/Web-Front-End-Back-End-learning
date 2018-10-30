// 라우트를 App 컴포넌트에서 정의를 하도록 하겠습니다. 기존의 내용을 다 비우고, 
// 새로 컴포넌트를 만들어서 다음과 같이 라우트들을 정의하세요.

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Auth } from 'pages';

// add 10.15 
import HeaderContainer from 'components/Base/HeaderContainer';


// <Route exact path="/" component={Home}/> local host / 페이지 Home 

class App extends Component {
    render() {
        return (
            <div>

                <HeaderContainer/>
                <Route exact path="/" component={Home}/> 
                <Route path="/auth" component={Auth}/>
            </div>
        );
    }
}

export default App;
