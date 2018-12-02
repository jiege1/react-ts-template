
import Ajax from 'common/utils/ajax';
import * as types from './type';
import { IList } from 'common/types';

const { api } =  window.CFG;

export const getList = async () => {
  return await Ajax.query<void, IList<types.ITodo>>({
    url: api.todoList.getList,
  });
};
