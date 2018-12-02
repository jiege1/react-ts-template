
import { takeEvery, put } from 'redux-saga/effects';
import * as CONST from '../const';
import * as api from 'api/todoList';
import * as actions from '../actions';

/**
 * 获取 todo列表
 * @returns {IterableIterator<any>}
 */
function* getTodoList() {
  try {

    const data = yield api.getList();
    yield put(actions.getListSuccess(data.list));

  } catch (e) {
    console.error('请求失败，失败原因：', e);

    // todo 使用action处理失败
    // yield put(actions.getListSuccess());
  }
}

export default function*() {
  // 拦截需要异步的 type
  yield takeEvery(CONST.GET_LIST, getTodoList);
}
