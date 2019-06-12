import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = { todos: [] };
  }

  render() {
    return (
      <div>
        <h1>Todo list</h1>
      </div>
    );
  }
}
export default TodoList;
