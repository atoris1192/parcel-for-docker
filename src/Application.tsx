import * as React from 'react';

interface Todos {
  id: Number | String;
  title: String;
  isDone: Boolean;
}
const todos: Todos[] = [
  { id: 0, title: "Task 0", isDone: false },
  { id: 1, title: "Task 1", isDone: false },
  { id: 2, title: "Task 2", isDone: true },
]


function TodoItem(props) {
  return(
    <li>
      <input type="checkbox"
        checked={ props.todo.isDone }
        onChange={ () => { props.checkItem(props.todo) }} 
      />
      <span className={ props.todo.isDone ? 'done' : '' }>{ props.todo.title }</span>
      <button onClick={ () => {props.deleteItem(props.todo)} }>Del</button>
    </li>
  )
}


function TodoList (props) {
  const todos = props.todos.map( todo => {
    return <TodoItem 
      todo={ todo } 
      checkItem={ props.checkItem }
      deleteItem={ props.deleteItem }
      key={ todo.id }
    />
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
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(props) {
    const todos = this.state.todos.slice();
    const newTodos = todos.filter( todo => {
      return todo !== props
    })

    this.setState({
      todos: newTodos
    })
  }

  checkItem(props) {
    const todos = this.state.todos.slice();
    const pos = todos.map( todo => {
      return todo.id
    }).indexOf(props.id)

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
          deleteItem={ this.deleteItem }
        />
      </div>
    )
  }
}

export default App