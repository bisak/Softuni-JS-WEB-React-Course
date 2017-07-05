import alt from '../alt'
import {getBooksForHomePage, getOnePageBooks} from '../Data'

class AllBooksActions {
  constructor () {
    this.generateActions(
      'getHomePageBooksSuccess',
      'getOnePageBooksSuccess'
    )
  }

  getHomePageBooks () {
    return getBooksForHomePage().then((data) => {
      this.getHomePageBooksSuccess(data)
      return true
    })
  }

  getOnePageBooks (page) {
    return getOnePageBooks(page).then((data) => {
      this.getOnePageBooksSuccess(data)
      return true
    })
  }
}

export default alt.createActions(AllBooksActions)
