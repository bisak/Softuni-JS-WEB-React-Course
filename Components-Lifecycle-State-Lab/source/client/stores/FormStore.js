import alt from '../alt'
import FormActions from '../actions/FormActions'
import UserActions from '../actions/UserActions'

class FormStore {
  constructor () {
    this.bindActions(FormActions)
    this.bindListeners({
      onRegisterUserFail: UserActions.registerUserFail,
      onRegisterUserSuccess: UserActions.registerUserSuccess
    })

    this.username = ''
    this.password = ''
    this.confirmedPassword = ''
    this.firstName = ''
    this.lastName = ''
    this.age = ''
    this.gender = ''
    this.formSubmitState = ''
    this.usernameValidationState = ''
    this.passwordValidationState = ''
    this.message = ''
  }

  onRegisterUserSuccess () {
    console.log('formStore register Success')
    this.formSubmitState = 'has-success'
    this.usernameValidationState = ''
    this.passwordValidationState = ''
    this.message = 'User register successful'
  }

  onRegisterUserFail (err) {
    console.log('FormStore register error', err)
    if (err.code === 11000) {
      this.usernameValidationState = 'has-error'
      this.message = 'Username already in use'
      return
    }

    this.formSubmitState = 'has-error'
    this.message = err.errmsg
  }

  onUsernameValidationFail () {
    this.usernameValidationState = 'has-error'
    this.passwordValidationState = ''
    this.formSubmitState = ''
    this.message = 'Enter username'
  }

  onPasswordValidationFail () {
    this.passwordValidationState = 'has-error'
    this.usernameValidationState = ''
    this.formSubmitState = ''
    this.message = 'Invalid password, or passwords do not match'
  }

  onHandleUsernameChange (e) {
    this.username = e.target.value
  }

  onHandlePasswordChange (e) {
    this.password = e.target.value
  }

  onHandleConfirmedPasswordChange (e) {
    this.confirmedPassword = e.target.value
  }

  onHandleFirstNameChange (e) {
    this.firstname = e.target.value
  }

  onHandleLastNameChange (e) {
    console.log('here')
    this.lastName = e.target.value
  }

  onHandleAgeChange (e) {
    this.age = e.target.value
  }

  onHandleGenderChange (e) {
    this.gender = e.target.value
  }
}

export default alt.createStore(FormStore)
