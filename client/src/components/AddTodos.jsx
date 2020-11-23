import React, { Component } from 'react'

export default class AddTodos extends Component {
  render() {
    return (
      <div>
        <form>
          <input 
          type="text" 
          className="form-control rounded-0" 
          placeholder="Type your todo here ..."
          />

          <button
            className="form-control rounded-0 btn-secondary"
            type="submit">
            Add Todo
            </button>
        </form>
      </div>
    )
  }
}
