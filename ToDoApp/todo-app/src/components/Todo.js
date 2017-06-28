import React from 'react'
import TodoActions from '../actions/TodoActions'

export default class Todo extends React.Component {
  completeTodo (ev) {
    ev.preventDefault()
    TodoActions.completeTodo(this.props.id)
  }

  undoTodo (ev) {
    ev.preventDefault()
    TodoActions.undoTodo(this.props.id)
  }

  render () {
    return (
      <li>
        {this.props.title} - {this.props.completed ? <button onClick={this.undoTodo.bind(this)}>UNDO</button> : <button onClick={this.completeTodo.bind(this)}>COMPLETE</button>}
      </li>
    )
  }
}
