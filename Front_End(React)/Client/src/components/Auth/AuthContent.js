/*
AuthContent 컴포넌트는 우리가 만들 /auth/login 과 /auth/register 서브 라우트를 감싸주는 컴포넌트입니다. 
각 서브라우트 컴포넌트는 컨테이너 컴포넌트로 만들어지게 됩니다.

AuthContent 는 현재 어떤 페이지인지 알려줄 제목을 title props 로 받아와서 보여주고, 
그 하단에는 children 을 렌더링해줍니다.
*/

import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Title = styled.div`
    font-size: 1.5rem ;
    font-weight: 500;
    color: ${oc.gray[8]};
    margin-bottom:1rem;
`;

const AuthContent = ({title, children}) => (
    <div>
        <Title>{title}</Title>
        {children}
    </div>

);

export default AuthContent;