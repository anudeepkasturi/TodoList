import { REQUEST_TODOS, CREATE_TODO, receiveTodos, receiveTodo }
  from '../actions/todo_actions';
import { fetchTodos, createTodo } from '../util/todo_api_utils';


const todoMiddleware = store => next => action => {
  let success;
  let error;
  switch (action.type) {
    case REQUEST_TODOS:
      success = (data) => store.dispatch(receiveTodos(data));
      error = (e) => console.log(e);
      fetchTodos(success, error);

      break;
    case CREATE_TODO:
      success = (data) => store.dispatch(receiveTodo(data));
      error = (e) => console.log(e);
      createTodo(action.todo, success, error);

      break;
    default:
      return next(action);
  }
};

export default todoMiddleware;
