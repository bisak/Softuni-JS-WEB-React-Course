import alt from '../alt'
import RegisterActions from '../actions/RegisterActions'
import history from '../history'
import toastr from 'toastr'

class RegisterStore {
  constructor () {
    this.bindActions(RegisterActions)
    this.user = {
      name: '',
      password: '',
      confirmPassword: ''
    }
  }

  onInputChange (event) {
    const target = event.target
    const fieldName = target.name
    const value = target.value
    this.user[fieldName] = value
  }

  onRegisterSuccess (response) {
    history.push('/login')
    toastr.options.positionClass = 'toast-bottom-right'
    toastr.success('You can log in now.', 'Registered')
  }

  onRegisterError (response) {
    console.log(response)
  }

  onRegisterValidationFail (reason) {
    toastr.error(reason)
  }
}

export default alt.createStore(RegisterStore)
