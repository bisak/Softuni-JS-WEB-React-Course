import alt from '../alt'
import AllAuthorsActions from '../actions/AllAuthorsActions'

class AllBooksStore {
  constructor () {
    this.bindActions(AllAuthorsActions)
    this.authors = []
  }

  onGetOnePageAuthorsSuccess (data) {
    this.authors = data
  }
}

export default alt.createStore(AllBooksStore)
