import * as React from 'react';
import { connect } from 'react-redux';
import { useDidMount } from 'common/hooks';
import * as types from './model/types';
import * as actions from './model/actions';

const TodoList = (props: Props) => {
  console.log(props);
  const { getTodoList } = props;

  // didMount 发送
  useDidMount(() => {
    getTodoList();
  });

  return (
    <div>
      <div>
        TodoList
      </div>
    </div>
  );
};

export default connect<IStateProps, IDispatchProps, IProps>(
  (state): IStateProps => ({
    todoList: state.todoList,
  }),
  (dispatch): IDispatchProps => ({
    getTodoList: () => dispatch(actions.getList()),
  }),
  (stateProps: IStateProps, dispatchProps: IDispatchProps, props: IProps): Props => {
    return Object.assign({}, stateProps, dispatchProps, props);
  },
)(TodoList);

type Props = IProps & IStateProps & IDispatchProps;

// todo 夫组件传过来的 props
export interface IProps {

}

// store 传过来的 stateProps
interface IStateProps {
  todoList: types.IState;
}

// store 传过来的 dispatch
interface IDispatchProps {
  getTodoList: () => any;
}
