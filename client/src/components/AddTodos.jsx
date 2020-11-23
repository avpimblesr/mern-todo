import React, { Component } from 'react';
import { Consumer } from './Context';

export default class AddTodos extends Component {
  state = {
    id: 4,
    title: '',
    completed: false
  }

  update = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  addTodo = (dispatch, e) => {
    e.preventDefault()
    const newTodo = this.state
    if(!this.state.title) return
    dispatch({ type: 'ADD', payload: newTodo })
    this.setState({ title: '' })
  }

  render() {
    return (
      <Consumer>{value => {
        const { dispatch } = value
        return (
          <form onSubmit={this.addTodo.bind(this, dispatch)}>
            <input
              type="text"
              className="form-control rounded-0"
              placeholder="Type your todo here ..."
              onChange={this.update} value={this.state.title}
            />

            <button
              className="form-control rounded-0 btn-secondary"
              type="submit"
            >
              Add Todo
            </button>
          </form>
        )
      }}
      </Consumer>
    )
  }
}
