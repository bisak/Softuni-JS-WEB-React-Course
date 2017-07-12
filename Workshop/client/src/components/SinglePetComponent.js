import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import SinglePetActions from '../actions/SinglePetActions'
import SinglePetStore from '../stores/SinglePetStore'
import CommentForm from './sub-components/CommentForm'
import alt from '../alt'
import moment from 'moment'

class SinglePetComponent extends Component {
  constructor (props) {
    super(props)
    this.state = SinglePetStore.getState()
    this.onChange = this.onChange.bind(this)
    this.id = this.props.match.params.id
  }

  componentDidMount () {
    SinglePetStore.listen(this.onChange)
    SinglePetActions.getSinglePet(this.id)
  }

  componentWillUnmount () {
    SinglePetStore.unlisten(this.onChange)
    alt.recycle(SinglePetStore)
  }

  onChange (state) {
    this.setState(state)
  }

  handleAddReview(){
    SinglePetActions.addComment(this.state.newComment, this.id)
  }

  render () {
    let commentForm = (<CommentForm review={this.state.review} onInput={SinglePetActions.inputChange} onAdd={this.handleAddReview.bind(this)} />)
    let comments = this.state.comments.map((comment, index)=>{
      return (
        <div className='break-word' key={index}>
          <h4>Comment by user <strong>{comment.user}</strong></h4>
          <small>Posted {moment(comment.createdOn).fromNow()}</small>
          <h4>{comment.message}</h4>
          <hr/>
        </div>
      )
    })

    return (
      <div className='container'>
        <Col className='z-depth-1' xs={12} sm={10} smOffset={1}>
          <Row><h4 className='text-center break-word'><strong>{this.state.pet.name}</strong></h4></Row>
          <Row>
            <Col xs={12} sm={10} smOffset={1}>
              <a href={this.state.pet.image} rel='noopener noreferrer' target='_blank'>
                <Image className='center-block z-depth-1' alt='Component demo image' src={this.state.pet.image} responsive rounded />
              </a>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={10} smOffset={1}>
              <div className='text-center break-word'>
                <br />
                <p className='profile-fnln'><strong>{this.state.pet.name}</strong> is a <strong>{this.state.pet.age}</strong> years old <strong>{this.state.pet.type}</strong> breed <strong>{this.state.pet.breed}</strong></p>
              </div>
            </Col>
          </Row>
        </Col>

        <Row>
          <Col className='review-form-container' xs={10} sm={10} md={6} smOffset={1} xsOffset={1} mdOffset={3}>
            {commentForm}
          </Col>
        </Row>

        <Row className='bottom-profile-section'>
          <Col className='z-depth-1' xs={12} sm={10} smOffset={1}>
            <h4 className='text-center'>Comments</h4>
            <hr />
            {comments}
          </Col>
        </Row>

      </div>
    )
  }
}
export default SinglePetComponent
