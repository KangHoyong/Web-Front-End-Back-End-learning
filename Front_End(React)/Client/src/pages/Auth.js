// Auth 컴포넌트 생성 

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from '../redux/modules/base';
import { AuthWrapper } from '../components/Auth';
import { Route } from 'react-router-dom';
import { Login, Register } from '../containers/Auth';


class Auth extends Component {

    // 페이지에 진입 할 때 헤더를 비활성화
    componentWillMount() {
        this.props.BaseActions.setHeaderVisibility(false);
    }

    // 페이지에서 벗어 날 때 다시 활성화
    componentWillUnmount() {
        this.props.BaseActions.setHeaderVisibility(true);
    }

    render() {
        return (
            // Route : 페이지 ( 로그인 회원가입 )
            <AuthWrapper>
                <Route path="/auth/login" component={Login}/>
                <Route path="/auth/Register" component={Register}/>
            </AuthWrapper>
        );
    }
}
export default connect(
    (state) => ({

    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(Auth);