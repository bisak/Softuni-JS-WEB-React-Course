import alt from '../alt'
import axios from 'axios'
import config from '../config'

class RegisterActions {
  constructor () {
    this.generateActions(
      'registerSuccess',
      'registerError',
      'inputChange',
      'registerValidationFail'
    )
  }

  registerUser (userData) {
    if (userData.password !== userData.confirmPassword) {
      this.registerValidationFail('Passwords didn\'t match')
      return true
    }
    return axios.post(`${config.baseUrl}/auth/signup`, userData).then((response) => {
      this.registerSuccess(response)
      return true
    }).catch((response) => {
      this.registerError(response)
      return true
    })
  }
}

export default alt.createActions(RegisterActions)
