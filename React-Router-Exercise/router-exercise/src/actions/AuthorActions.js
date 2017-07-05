import alt from '../alt'
import {getAuthorById} from '../Data'

class AuthorActions {
  constructor () {
    this.generateActions(
      'getAuthorByIdSuccess'
    )
  }

  getAuthorById (id) {
    return getAuthorById(id).then((data) => {
      this.getAuthorByIdSuccess(data)
      return true
    })
  }
}

export default alt.createActions(AuthorActions)
