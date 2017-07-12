import alt from '../alt'
import AllPetsActions from '../actions/AllPetsActions'
import toastr from 'toastr'

class AllProductsStore {
  constructor () {
    this.bindActions(AllPetsActions)
    this.pets = []
    this.activePage = 1
    this.noPetsAvailable = false
  }

  onGetPetsSuccess (resp) {
    let ajaxData = resp[0]
    let requestPage = resp[1]
    this.pets = ajaxData
    if (this.pets.length === 0) {
      this.noPetsAvailable = true
    } else {
      this.noPetsAvailable = false
    }
    this.activePage = requestPage
    window.scrollTo(0, 0)
  }

  onGetPetsError (error) {
    console.log(error)
    toastr.error('An error occured when getting pets.')
  }
}

export default alt.createStore(AllProductsStore)
