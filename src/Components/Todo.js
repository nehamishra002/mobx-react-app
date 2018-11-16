import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('TodoStore')
@observer class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <p>Todo</p>
        <ol>
        {this.props.TodoStore.todos.map(function(name, index){
          return <li key={ index }>{name}</li>;
        })}
        </ol>
      </div>
    );
  }
}

export default Todo;
