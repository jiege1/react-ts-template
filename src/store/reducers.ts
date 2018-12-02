
import todoModel from 'containers/todoList/model';

export default {
  root: () => 'root',
  todoList: todoModel.reducer,
};
