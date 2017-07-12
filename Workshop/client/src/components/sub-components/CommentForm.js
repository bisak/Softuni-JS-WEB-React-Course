import React, { Component } from 'react'
import { FormControl, FormGroup, Button, Form } from 'react-bootstrap'

class CommentForm extends Component {
  onFormSubmit (event) {
    event.preventDefault()
    this.props.onAdd()
  }

  render () {
    return (
      <Form onSubmit={this.onFormSubmit.bind(this)} horizontal>

        <FormGroup controlId='review-input'>
          <FormControl required maxLength={500} componentClass='textarea' name='newComment' value={this.props.newComment} onChange={this.props.onInput} placeholder='Comment...' />
        </FormGroup>

        <FormGroup>
          <Button className='center-block' type='submit'>Comment</Button>
        </FormGroup>

      </Form>

    )
  }
}
export default CommentForm
