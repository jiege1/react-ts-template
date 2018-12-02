import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Utils from 'common/utils';
import StoreUtils from 'common/utils/store';

import rootReducer from './reducers';
import rootSaga from './sagas';

const enhancers = [];
const middleWares = [];

// 创建 saga中间件
const sagaMiddleware = createSagaMiddleware();
middleWares.push(sagaMiddleware);

// 本地开发环境，加上 redux-dev-tools
if (Utils.isLocal) {
  const devToolsStr: string = 'devToolsExtension';
  const devToolsExtension = window[devToolsStr];
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const store = createStore(
  StoreUtils.makeReducer(rootReducer),
  compose(applyMiddleware(...middleWares), ...enhancers),
);

// 启动 sagaMiddleware
sagaMiddleware.run(rootSaga);

export default store;
