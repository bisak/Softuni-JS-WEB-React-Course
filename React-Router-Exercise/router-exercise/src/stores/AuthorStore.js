import alt from '../alt'
import AuthorActions from '../actions/AuthorActions'

class AllBooksStore {
  constructor () {
    this.bindActions(AuthorActions)
    this.author = []
  }

  getAuthorByIdSuccess (data) {
    this.author = data
  }
}

export default alt.createStore(AllBooksStore)
