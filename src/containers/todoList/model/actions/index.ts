
import * as CONST from '../const';
import * as types from '../types';
import * as apiTypes from 'api/todoList/type';

/**
 * 请求列表
 * @returns {IGetList}
 */
export const getList = (): types.IGetList => {
  return {
    type: CONST.GET_LIST,
  };
};

/**
 * 请求成功
 * @returns {IGetList}
 */
export const getListSuccess = (list: apiTypes.ITodo[]): types.IGetListSuccess => {
  return {
    type: CONST.GET_LIST_SUCCESS,
    payload: {
      list,
    },
  };
};

