import alt from '../alt'
import SinglePetActions from '../actions/SinglePetActions'
import history from '../history'
import toastr from 'toastr'

class SinglePetStore {
  constructor () {
    this.bindActions(SinglePetActions)
    this.pet = {
      name: '',
      age: '',
      image: '',
      type: '',
      breed: ''
    }
    this.comments = []
    this.newComment = ''
  }

  onGetSinglePetSuccess (response) {
    this.pet = response
  }

  onGetSinglePetError (error) {
    history.push('/not-found')
  }

  onInputChange (event) {
    const {target} = event
    const fieldName = target.name
    let value = target.value
    this[fieldName] = value
  }

  onAddCommentSuccess (data) {
    toastr.success('Successfully added comment.')
    this.comments.unshift(data.comment)
  }

  onAddCommentError (error) {
    toastr.error(error.message)
  }

  onGetCommentsSuccess(response){
    this.comments = response
  }
}

export default alt.createStore(SinglePetStore)
