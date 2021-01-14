import React, { Component } from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./App.css";



const list = [
  {
    task: "wash dishes",
    id: 1234567898765,
    completed: false
  },
  {
    task: "take out trash",
    id:8765432123456,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.

  // state
  constructor() {
    super();
    this.state = {
      list,
      bogusState: "duh"
    };
  }

  toggleComplete = (itemId) => {
    console.log(`ab: App.js: toggleComplete: itemId:`, itemId);

    this.setState({
      ...this.state,
      list: this.state.list.map( (item) => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  addTask = (taskName) => {
    this.setState({
      list: [
        ...this.state.list,
        { task: taskName, completed: false, id: Date.now() }
      ]
    });
  };
  
  clearComplete = () => {
    this.setState({
      list: this.state.list.filter( (item) => !item.completed)
    });
  };

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  
  
  render() {
    return (
      <div className="main_content">
        <header className="app_header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTask={this.addTask} />
        </header>
        <TodoList
          list={this.state.list}
          toggleComplete={this.toggleComplete}
          clearComplete={this.clearComplete}
        />

      </div>
    );
  }
}

export default App;
