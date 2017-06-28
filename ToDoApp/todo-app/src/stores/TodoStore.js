import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class TodoStore extends EventEmitter {
  constructor () {
    super()

    this.todos = [
      { id: 1, title: 'Go shopping', completed: false },
      { id: 2, title: 'Go walking', completed: false }
    ]
  }

  createTodo (title) {
    const id = this.todos.length + 1
    this.todos.push({
      id,
      title,
      completed: false
    })

    this.emit('change')
  }

  completeTodo (id) {
    this.todos.find(todo => todo.id === id).completed = true

    this.emit('change')
  }

  undoTodo (id) {
    this.todos.find(todo => todo.id === id).completed = false

    this.emit('change')
  }

  getAll () {
    return new Promise((resolve, reject) => {
      resolve(this.todos.slice(0))
    })
  }

  handleAction (action) {
    switch (action.type) {
      case 'CREATE_TODO': {
        this.createTodo(action.title)
        break
      }
      case 'COMPLETE_TODO': {
        this.completeTodo(action.id)
        break
      }
      case 'UNDO_TODO': {
        this.undoTodo(action.id)
        break
      }
      default: break
    }
  }
}

let todoStore = new TodoStore()

dispatcher.register(todoStore.handleAction.bind(todoStore))

export default todoStore
