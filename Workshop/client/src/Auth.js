class Auth {
  static authenticateUser (token, username) {
    window.localStorage.setItem('token', token)
    window.localStorage.setItem('username', username)
  }
  static isUserAuthenticated () {
    return window.localStorage.getItem('token') !== null
  }
  static deauthenticateUser () {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('username')
  }
  static getToken () {
    return window.localStorage.getItem('token')
  }
  static getUsername () {
    return window.localStorage.getItem('username')
  }
  static getAuthHeader () {
    return {Authorization: 'bearer ' + this.getToken()}
  }
}

export default Auth
