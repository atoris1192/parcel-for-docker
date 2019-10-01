import * as React from 'react';

const todos = [
  { id: 0, title: "Task 1", isDone: false },
  { id: 1, title: "Task 2", isDone: false },
  { id: 3, title: "Task 3", isDone: true },
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
    }
  }
  render() {
    return(
      <div className="container">
        <p>{ this.state.todos[0].title }</p>
        <p>{ this.state.todos[1].title }</p>
        <p>{ this.state.todos[2].title }</p>
        
      </div>
    )
  }

}

export default App