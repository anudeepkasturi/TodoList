import React from 'react';
import ReactDOM from 'react-dom';
import { requestTodos } from './actions/todo_actions';
import Root from './components/root';


import configureStore from './store/store';



document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById("content");
  ReactDOM.render(<Root store={store} />, root);

//testing
/*
  Define store inside this listener (line 11).
  This ensures you are testing the same store you passed to your root component
  and avoid create two differnt stores. (one here and one outside of the listener)
*/
  window.requestTodos = requestTodos;
  window.store = store;
});
