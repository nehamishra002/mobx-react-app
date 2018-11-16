import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <p>Todo</p>
      </div>
    );
  }
}

export default Todo;
