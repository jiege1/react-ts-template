
import * as React from 'react';
import store from 'store';
import { connect } from 'react-redux';
import { combineReducers, Dispatch } from 'redux';

interface ILazyConnect<S, D> {
  reducers?: string[];
  component: React.SFC<S & D>;
  mapStateToProps: (state) => S;
  mapDispatchToProps: (dispatch: Dispatch) => D;
}

/**
 * StoreUtils
 * 部分关于 store, reducer的工具
 */
export default class StoreUtils {

  public static makeReducer(asyncReducers) {
    return combineReducers(asyncReducers);
  }

  // /**
  //  * 懒注入store的reducer
  //  * 如果store不存在reducer，则先注入reducer到store，再挂载store
  //  *
  //  */
  // public static lazyConnect<S, D>(config: ILazyConnect<S, D>): React.ComponentType {
  //
  //   const { reducers = [], component, mapStateToProps, mapDispatchToProps } = config;
  //
  //   // 如果没传reducers或者未空，直接返回state
  //   if (!reducers || !reducers.length) {
  //     return connect(mapStateToProps, mapDispatchToProps)(component);
  //   }
  //
  //   return connect((state) => {
  //
  //     const notInjectStateKeys = reducers.filter(item => state[item] === undefined);
  //
  //     if (notInjectStateKeys.length) {
  //       StoreUtils.registerReducers(notInjectStateKeys).then(() => {
  //         console.log('注册完成的reducers:', notInjectStateKeys);
  //       });
  //     }
  //
  //     return mapStateToProps(state);
  //   }, mapDispatchToProps)(component);
  // }
  //
  // /**
  //  * 注册reducer
  //  * @param {string[]} reducerKeys
  //  * @returns {Promise<void>}
  //  */
  // public static async registerReducers(reducerKeys: string[]) {
  //   const reducers = await StoreUtils.loadReducers(reducerKeys);
  //
  //   // 挂载reducer
  //   reducers.forEach((reducer, index) => {
  //     if (!store.asyncReducers[reducerKeys[index]]) {
  //       store.asyncReducers[reducerKeys[index]] = reducer;
  //     }
  //   });
  //
  //   store.replaceReducer(StoreUtils.makeReducer(store.asyncReducers));
  // }
  //
  // /**
  //  * 动态加载 reducers
  //  * @param {string[]} reducers
  //  * @returns {Promise<[any]>}
  //  */
  // public static loadReducers(reducers: string[]) {
  //   const promises = reducers.map(item => {
  //     const path: string = `${item}/reducer`;
  //     return new Promise(resolve => {
  //       import('models/' + path).then(res => {
  //         resolve(res.default);
  //       });
  //     });
  //   });
  //   return Promise.all(promises);
  // }

}
