import { createStore } from 'redux';

import modules from './modules';

// Todo: 미들웨어, react-hot-loader 적용
const configureStore = (initialState) => {
    const store = createStore(modules, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    

    // hot-reloading code add 
    if(module.hot) {
        module.hot.accept('./modules', () => {
            const nextRootReducer = require('./modules').default;
            store.replaceReducer(nextRootReducer);
        });
    }
  
    return store;
}

export default configureStore;

/*
스토어를 생성하는 함수를 만들어서 redux/configureStore.js 에 저장하도록 하겠습니다. 
지금은 미들웨어와 react-hot-loader 를 아직 적용하지 않았으므로 다음과 같이 간단하게 코드를 작성하면 되며, 
추후 다시 수정을 할 것 입니다.
*/