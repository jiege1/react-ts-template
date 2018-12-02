import { all, fork } from 'redux-saga/effects';

import todoModel from 'containers/todoList/model';

export default function* rootSagas() {

  yield all([
    fork(todoModel.sagas),
    // todo otherModal sagas

  ]);

}
