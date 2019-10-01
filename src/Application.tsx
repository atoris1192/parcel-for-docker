import * as React from 'react';

interface Todos {
  id: Number | String;
  title: String;
  isDone: Boolean;
}

const todos: Todos[] = [
  { id: 0, title: "Task 1", isDone: false },
  { id: 1, title: "Task 2", isDone: false },
  { id: 3, title: "Task 3", isDone: true },
]

function TodoList (props) {
  const todos = props.todos.map( todo => {
    return(<li key={ todo.id }>{ todo.title }</li>)
  })
  return(
    <ul>
      { todos }
    </ul>
  )
}

class App extends React.Component {
  private state: any;
  constructor() {
    super();
    this.state = {
      todos: todos,
    }
  }
  render() {
    return(
      <div className="container">
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}

export default App