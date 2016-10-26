import React from 'react';
import TodoListItem from './todo_list_item';

class Todo extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    const {todos} = this.props;
    return (
      <ul>
        {todos.map( todo => (
          <TodoListItem todo={todo} />
        ))}
      </ul>
    );
  }


}

export default Todo;
