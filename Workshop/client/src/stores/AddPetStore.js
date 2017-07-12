import alt from '../alt'
import AddPetActions from '../actions/AddPetActions'
import toastr from 'toastr'
import history from '../history'

class AddPetStore {
  constructor () {
    this.bindActions(AddPetActions)
    this.product = {
      name: '',
      age: 1,
      image: '',
      type: 'Cat',
      breed: ''
    }
  }

  onAddPetSuccess (response) {
    alt.recycle(this)
    toastr.success('Successfully added pet.')
    history.push(`/`)
  }

  onAddPetError (error) {
    toastr.error(error.message || 'An error ocurred')
  }

  onInputChange (event) {
    const target = event.target
    const fieldName = target.name
    let value = target.value
    this.product[fieldName] = value
  }
}

export default alt.createStore(AddPetStore)
