import React, { Component } from 'react'
import Todo from './Todo';
import { Consumer } from '../components/Context';

export default class Todos extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { todos } = value
          return todos.map(todo =>
            <Todo todo={todo} key={todo.id} />
          )
        }}
      </Consumer>
    )
  }
}
