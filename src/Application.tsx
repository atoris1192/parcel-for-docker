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

function Title(props) {
  return(
    <h1>
      My todos
      <button className="purge" onClick={ props.purge }>Purge</button>
    </h1>
  )
}

function TodoForm(props) {

  return(
    <form onSubmit={ props.addTodo }>
      <div>{ props.item }</div>
      <input type="text" 
        id = "inputText"
        value={ props.itemj }
        onChange={ props.updateItem }
        />
      <input type="submit" value="Add"/>
    </form>
  )
}


class App extends React.Component {
  private state: any;
  private setState: any;
  constructor() {
    super();
    this.state = {
      todos: todos,
      item: '',
    }
    this.checkItem = this.checkItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.purge = this.purge.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  updateItem(e) {
    this.setState({
      item: e.target.value
    })    
    
  }
  addTodo(e){
    e.preventDefault();

    if(this.state.item.trim() === '' ) return
    const inputText: any = document.getElementById('inputText');

    const item = {
      id: new Date().getTime().toString(36),
      title: this.state.item,
      isDone: false,
    }
    const todos = this.state.todos.slice();
    todos.push(item);

    this.setState({
      todos: todos,
      item: '',
    })
    inputText.value = ''

  }

  purge() {
    const todos = this.state.todos.slice();
    const newTodos = todos.filter( todo => {
      return !todo.isDone
    })

    this.setState({
      todos: newTodos
    })

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
        <Title todos={this.state.todos} purge={ this.purge }/>
        <TodoList
          todos={this.state.todos}
          checkItem={ this.checkItem }
          deleteItem={ this.deleteItem }
        />
        <TodoForm
          item={ this.state.item }
          updateItem={ this.updateItem} 
          addTodo={ this.addTodo }
         />
      </div>
    )
  }
}

export default App