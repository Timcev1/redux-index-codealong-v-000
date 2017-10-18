import React, { Component } from 'react';

class Todo extends Component {

  render() {
    const todos = this.props.store.getState().todos.map((todo, index) => {
  return <li key={index}>{todo.text}</li>
});

return(
  <ul>
    {todos}
  </ul>
);
}
};

export default Todo;
