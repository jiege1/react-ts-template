
import { IList } from 'common/types';
import { IActionCreator, Reducer } from 'common/types/stores';
import { ITodo } from 'api/todoList/type';
import CONST from '../const';

export interface ITodoList extends IList<ITodo> {}

export interface IState extends ITodoList {
  finishFilter: 'all' | boolean;
  keyword: string;
}

export type IReducer = Reducer<IState, CONST.ActionTypes>;

// actions
export interface IGetList extends IActionCreator<CONST.GET_LIST> {}

export interface IGetListSuccess extends IActionCreator<CONST.GET_LIST_SUCCESS, ITodoList> {}

// export interface IAddNumAction extends IActionCreator<CONST.NUM_ADD> {}
//
// export interface IReduceNumAction extends IActionCreator<CONST.NUM_REDUCE> {}
//
// export interface IResetNumAction extends IActionCreator<CONST.NUM_RESET, IState> {}
