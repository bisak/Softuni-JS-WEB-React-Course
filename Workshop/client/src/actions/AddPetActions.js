import alt from '../alt'
import axios from 'axios'
import config from '../config'
import Auth from '../Auth'

class AddPetActions {
  constructor () {
    this.generateActions(
      'addPetSuccess',
      'addPetError',
      'inputChange'
    )
  }

  addProduct (petToAdd) {
    return axios.post(`${config.baseUrl}/pets/create/`, petToAdd, {headers: Auth.getAuthHeader()}).then((response) => {
      if (!response.data.success) {
        this.addPetError(response.data)
        return true
      }
      this.addPetSuccess(response.data)
      return true
    }).catch((error) => {
      this.addPetError(error)
      return true
    })
  }
}

export default alt.createActions(AddPetActions)
