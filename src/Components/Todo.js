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
    return todo.completed = !todo.completed;
  }
  render() {

    const {todos, filter, filteredTodo, clearCompleted, completedTodosCount, allTodosCount} = this.props.TodoStore;

    const renderTodo = filteredTodo.map(todo => (
      <li key={todo.id}>
      <input type="checkbox" onClick={() => this.toggleComplete(todo)} value={todo.completed} />
      {todo.value}
      </li>
    ))

    return (
      <div className="Todo">
        <h1>ReactJS Todo App using MobX</h1>
        <div>
          <p>Search todo {filter} </p>
          <input className="filter" value={filter} onChange={this.handleFilter.bind(this)} />
        </div>
        <div>
          <p>Create new todo</p>
          <input className="create" onKeyPress={this.createNew.bind(this)} />
          <ol>
            {renderTodo}
          </ol>
          <p>Completed todo : {completedTodosCount} / {allTodosCount} </p>
          <a href="#" onClick={clearCompleted}> Clear Completed tasks </a>
        </div>
      </div>
    );
  }
}

export default Todo;
