import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = { isEditing: false };

    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove() {
    this.props.removeTodo(this.props.id);
  }
  render() {
    let result;

    if (this.state.isEditing) {
      result = (
        <div>
          <form>
            <input type="text" />
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <button>Edit</button>
          <button onClick={this.handleRemove}>X</button>

          <li>{this.props.task}</li>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
