import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'
import AddPetForm from './sub-components/AddPetForm'
import AddProductActions from '../actions/AddPetActions'
import AddProductStore from '../stores/AddPetStore'

class AddPetComponent extends Component {
  constructor (props) {
    super(props)
    this.state = AddProductStore.getState()
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount () {
    AddProductStore.listen(this.onChange)
  }

  componentWillUnmount () {
    AddProductStore.unlisten(this.onChange)
  }

  onChange (state) {
    this.setState(state)
  }

  handleAddProduct () {
    AddProductActions.addProduct(this.state.product)
  }

  render () {
    return (
      <div className='container remove-navbar-margin'>
        <Row><h4 className='text-center'>Add Product</h4></Row>

        <Row>
          <Col xs={10} sm={10} md={6} smOffset={1} xsOffset={1} mdOffset={3}>
            <AddPetForm product={this.state.product} onAdd={this.handleAddProduct.bind(this)} onInput={AddProductActions.inputChange} />
          </Col>
        </Row>
      </div>
    )
  }
}
export default AddPetComponent
