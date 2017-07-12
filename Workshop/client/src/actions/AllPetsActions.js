import alt from '../alt'
import axios from 'axios'
import config from '../config'

class AllPetsActions {
  constructor () {
    this.generateActions(
      'getPetsSuccess',
      'getPetsError',
      'changePageSuccess',
      'inputChange'
    )
  }

  getOnePagePets (page) {
    return axios.get(`${config.baseUrl}/pets/all?page=${page}`).then((response) => {
      this.getPetsSuccess(response.data, page)
      return true
    }).catch((error) => {
      console.log(error)
      this.getPetsError(error)
      return true
    })
  }
}

export default alt.createActions(AllPetsActions)
