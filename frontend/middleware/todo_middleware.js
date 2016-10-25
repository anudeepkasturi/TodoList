import { REQUEST_TODOS, RECEIVE_TODOS, receiveTodos } from '../actions/todo_actions';
import { fetchTodos } from '../util/todo_api_utils';


const todoMiddleware = store => next => action => {
  switch (action.type) {
    case REQUEST_TODOS:
      const success = (data) => store.dispatch(receiveTodos(data));
      const error = (e) => console.log(e);
      fetchTodos(success, error);
      break;
    default:
      return next(action);
  }
};

export default todoMiddleware;
