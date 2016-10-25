import merge from 'lodash/merge';
import { fetchTodos } from '../util/todo_api_utils';


import { RECEIVE_TODOS, REQUEST_TODOS } from '../actions/todo_actions';

const TodosReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_TODOS:
      let newState = {};
      // *1
      // return merge(newState, action.todos);
      action.todos.forEach(todo => {newState[todo.id] = todo;});
      return newState;
    default:
      return state;
  }
};

export default TodosReducer;



/*
*1
If we use merge, we'll have the following. Notice how the main Obj id
doesn't match the todo object's id:
{
  '0': {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  '1': {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
}
Also, if we delete from the DB, it would be an even bigger mess!

That's why we map the indexes to the newState

*/
