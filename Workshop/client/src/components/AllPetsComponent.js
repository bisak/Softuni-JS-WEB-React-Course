import React, { Component } from 'react'
import { Row, Pagination } from 'react-bootstrap'
import AllPetsStore from '../stores/AllPetsStore'
import AllPetsActions from '../actions/AllPetsActions'
import queryString from 'query-string'
import history from '../history'
import alt from '../alt'
import ListPetComponent from '../components/sub-components/ListPetComponent'

class AllPetsComponent extends Component {
  constructor (props) {
    super(props)
    this.state = AllPetsStore.getState()
    this.onChange = this.onChange.bind(this)
    this.page = Number(queryString.parse(history.location.search).page) || 1
  }

  handlePageSelect (page) {
    this.page = page
    history.push(`?page=${this.page}`)
    AllPetsActions.getOnePagePets(this.page)
  }

  componentDidMount () {
    AllPetsStore.listen(this.onChange)
    AllPetsActions.getOnePagePets(this.page)
  }

  componentWillUnmount () {
    alt.recycle(AllPetsStore)
    AllPetsStore.unlisten(this.onChange)
  }

  onChange (state) {
    this.setState(state)
  }

  render () {
    let pets = this.state.pets.map(pet => {
      return (<ListPetComponent key={pet.id} pet={pet} />)
    })
    return (
      <div className='container remove-navbar-margin'>
        {this.state.noPetsAvailable ? (<h1 className='text-center'>No pets available.</h1>) : (<h4 className='text-center'>All pets</h4>)}
        {pets}
        <Row>
          <div className='fit-content center-block'>
            <Pagination
              prev next first last ellipsis boundaryLinks maxButtons={3}
              activePage={this.state.activePage} items={20}
              onSelect={this.handlePageSelect.bind(this)} />
          </div>
        </Row>
      </div>
    )
  }
}

export default AllPetsComponent
