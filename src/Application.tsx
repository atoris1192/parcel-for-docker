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


function TodoItem(props) {
  return(
    <li>
      <input type="checkbox"
        checked={ props.todo.isDone }
        onChange={ () => { props.checkItem(props.todo) }} 
      />
      <span className={ props.todo.isDone ? 'done' : '' }>{ props.todo.title }</span>
      <button>Del</button>
    </li>
  )
}


function TodoList (props) {
  const todos = props.todos.map( todo => {
    return <TodoItem 
      todo={ todo } 
      checkItem={ props.checkItem }
      key={ todo.id }
    />
    // return(<li key={ todo.id }>{ todo.title }</li>)
  })
  return(
    <ul>
      { todos }
    </ul>
  )
}


class App extends React.Component {
  private state: any;
  private setState: any;
  constructor() {
    super();
    this.state = {
      todos: todos,
    }
    this.checkItem = this.checkItem.bind(this);
  }
  checkItem(props) {
    const todos = this.state.todos.slice();
    const pos = todos.map( todo => {
      return todo.id
    }).indexOf(props.id)
    console.log(pos);
    todos[pos].isDone = !todos[pos].isDone

    this.setState({
      todos: todos
    })
    

    
  }
  render() {
    return(
      <div className="container">
        <h1>Todos</h1>
        <TodoList
          todos={this.state.todos}
          checkItem={ this.checkItem }
        />
      </div>
    )
  }
}

export default App