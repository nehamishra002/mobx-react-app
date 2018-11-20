import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('TodoStore')
@observer class Todo extends Component {

  createNew(e){
    if(e.which === 13){
      this.props.TodoStore.createTodo(e.target.value);
      e.target.value = "";
    }
  }
  handleFilter(e){
    this.props.TodoStore.filter = e.target.value;
  }
  toggleComplete(todo){
    console.log(todo);
    todo.completed = !todo.completed;
  }
  render() {
    const {todos, filter, filteredTodo, clearCompleted} = this.props.TodoStore;

    const renderTodo = filteredTodo.map(todo => (
      <li key={todo.id}>
      <input type="checkbox" onChange={this.toggleComplete(this, todo)} value={todo.completed} />
      {todo.value}
      </li>
    ))

    return (
      <div className="Todo">
        <p>Todo</p>
        <div>
          <p>Create new todo </p>
          <input className="create" onKeyPress={this.createNew.bind(this)} />
        </div>
        <div>
          <p>Search todo {filter} </p>
          <input className="filter" value={filter} onChange={this.handleFilter.bind(this)} />
        </div>
        <ol>
          {renderTodo}
        </ol>
        <a href="#" onClick={clearCompleted}> Clear Completed tasks </a>
      </div>
    );
  }
}

export default Todo;
