import alt from '../alt'

class FormActions {
  constructor () {
    this.generateActions(
      'handleUsernameChange',
      'handlePasswordChange',
      'handleConfirmedPasswordChange',
      'handleFirstNameChange',
      'handleLastNameChange',
      'handleAgeChange',
      'handleGenderChange',
      'usernameValidationFail',
      'passwordValidationFail'
    )
  }
}

export default alt.createActions(FormActions)
