import alt from '../alt'
import BookActions from '../actions/BookActions'

class AllBooksStore {
  constructor () {
    this.bindActions(BookActions)
    this.book = {
      comments: []
    }
  }

  onGetBookByIdSuccess (data) {
    this.book = data
  }
}

export default alt.createStore(AllBooksStore)
