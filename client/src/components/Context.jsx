import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (prevState, action) => {
  switch (action.type) {

    case 'TOGGLE':
      return {
        todos: prevState.todos.map(todo => {
          if (todo.id === action.payload) {
            todo.complete = !todo.complete
          }
          return todo
        }
        )
      }

    case 'REMOVE':
      return {
        todos: prevState.todos.filter(todo => todo.id !== action.payload)
      }

    case 'ADD':
      return {
        todos: [...prevState.todos, action.payload]
      }

    default: return prevState
  }
}

export class Provider extends Component {
  state = {
    todos: [
      { id: 1, title: "Milk the cows", completed: false },
      { id: 2, title: "Shoe the horses", completed: false },
      { id: 3, title: "Collect the eggs", completed: false }
    ],
    dispatch: (action) => this.setState(prevState => reducer(prevState, action))
  }

  componentDidMount() {
    axios.get('/todos')
      .then(res => this.setState({ todos: res.data }))
    console.log('Component did mount')
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}

      </Context.Provider>
    )
  }
}


export const Consumer = Context.Consumer;