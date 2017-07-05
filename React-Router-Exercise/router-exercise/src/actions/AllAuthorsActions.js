import alt from '../alt'
import {getOnePageAuthors} from '../Data'

class AllAuthorsActions {
  constructor () {
    this.generateActions(
      'getOnePageAuthorsSuccess'
    )
  }

  getOnePageAuthors (page, sort) {
    sort = sort || 'asc'
    return getOnePageAuthors(page, sort).then((data) => {
      this.getOnePageAuthorsSuccess(data)
      return true
    })
  }
}

export default alt.createActions(AllAuthorsActions)
