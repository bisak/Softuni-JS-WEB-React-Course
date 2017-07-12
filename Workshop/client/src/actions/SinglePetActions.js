import alt from '../alt'
import axios from 'axios'
import config from '../config'
import Auth from '../Auth'

class SinglePetActions {
  constructor () {
    this.generateActions(
      'getSinglePetSuccess',
      'getSinglePetError',
      'addCommentSuccess',
      'addCommentError',
      'inputChange',
      'getCommentsSuccess',
      'getCommentsError'
    )
  }

  getSinglePet (id) {
    return axios.get(`${config.baseUrl}/pets/details/${id}`, {headers: Auth.getAuthHeader()}).then(response => {
      if(response.data.hasOwnProperty('success') && response.data.success === false){
        this.getSinglePetError(response.data)
        return true
      }
      this.getComments(id)
      this.getSinglePetSuccess(response.data)
      return true
    }).catch(error => {
      this.getSinglePetError(error)
      return true
    })
  }

  addComment (commentToAdd, id) {
    return axios.post(`${config.baseUrl}/pets/details/${id}/comments/create`, {message: commentToAdd}, {headers: Auth.getAuthHeader()}).then(response => {
      if (!response.data.success) {
        this.addCommentError(response.data)
        return true
      }
      this.addCommentSuccess(response.data)      
      return true
    }).catch(error => {
      this.addCommentError(error)
      return true
    })
  }

  getComments(id){
    return axios.get(`${config.baseUrl}/pets/details/${id}/comments/`, {headers: Auth.getAuthHeader()}).then(response => {
      this.getCommentsSuccess(response.data)      
      return true
    }).catch(error => {
      this.getCommentsError(error)
      return true
    })
  }
}

export default alt.createActions(SinglePetActions)
