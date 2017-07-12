import React, { Component } from 'react'
import { ControlLabel, FormControl, FormGroup, Button, Form } from 'react-bootstrap'

class PetAddForm extends Component {
  onFormSubmit (event) {
    event.preventDefault()
    this.props.onAdd()
  }

  render () {
    return (
      <Form onSubmit={this.onFormSubmit.bind(this)} horizontal>

        <FormGroup controlId='title-input'>
          <ControlLabel>Name</ControlLabel>
          <FormControl maxLength={50} type='text' name='name' required value={this.props.product.name} onChange={this.props.onInput} placeholder='Pet name' />
        </FormGroup>

        <FormGroup controlId='demo-url-input'>
          <ControlLabel>Age</ControlLabel>
          <FormControl type='number' min={0} name='age' required value={this.props.product.age} onChange={this.props.onInput} placeholder='Age' />
        </FormGroup>

        <FormGroup controlId='demo-url-input'>
          <ControlLabel>Image URL</ControlLabel>
          <FormControl type='url' min={0} name='image' required value={this.props.product.image} onChange={this.props.onInput} placeholder='Image URL' />
        </FormGroup>

        <FormGroup controlId='formControlsSelect'>
          <ControlLabel>Type</ControlLabel>
          <FormControl required componentClass='select' name='type' value={this.props.product.type} onChange={this.props.onInput} placeholder='select'>
            <option value='Cat'>Cat</option>
            <option value='Dog'>Dog</option>
            <option value='Other'>Other</option>
          </FormControl>
        </FormGroup>

        <FormGroup controlId='price-input'>
          <ControlLabel>Breed</ControlLabel>
          <FormControl maxLength={50} type='text' name='breed' required value={this.props.product.breed} onChange={this.props.onInput} placeholder='Breed' />
        </FormGroup>

        <FormGroup>
          <Button className='center-block' type='submit'>Add Product</Button>
        </FormGroup>

      </Form>
    )
  }
}
export default PetAddForm
