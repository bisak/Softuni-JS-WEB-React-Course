import alt from '../alt'
import AllBooksActions from '../actions/AllBooksActions'

class AllBooksStore {
  constructor () {
    this.bindActions(AllBooksActions)
    this.books = []
  }

  onGetHomePageBooksSuccess (data) {
    this.books = data
  }

  onGetOnePageBooksSuccess (data) {
    this.books = data
  }
}

export default alt.createStore(AllBooksStore)
