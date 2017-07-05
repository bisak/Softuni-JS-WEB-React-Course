import alt from '../alt'
import {getBookById} from '../Data'

class BookActions {
  constructor () {
    this.generateActions(
      'getBookByIdSuccess'
    )
  }

  getBookById (id) {
    return getBookById(id).then((data) => {
      this.getBookByIdSuccess(data)
      return true
    })
  }
}

export default alt.createActions(BookActions)
