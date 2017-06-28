import dispatcher from '../dispatcher'

let todoActions = {
  createTodo: (title) => {
    dispatcher.dispatch({
      type: 'CREATE_TODO',
      title: title
    })
  },
  completeTodo: (id) => {
    dispatcher.dispatch({
      type: 'COMPLETE_TODO',
      id: id
    })
  },
  undoTodo: (id) => {
    dispatcher.dispatch({
      type: 'UNDO_TODO',
      id: id
    })
  }
}

export default todoActions
