import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, Button } from 'react-bootstrap'

class ListPetComponent extends Component {
  render () {

    return (
      <Row>
        <Col md={10} mdOffset={1} className='list-product-card z-depth-1'>
          <Col className='image-container' xs={12} sm={5}>
            <Image className='list-image z-depth-1' alt='Product demo image' src={this.props.pet.image} responsive rounded />
          </Col>
          <Col xs={12} sm={5} className='list-product-text'>
            <p className='title'><Link to={`/pet/${this.props.pet.id}`}><strong>{this.props.pet.name}</strong></Link></p>
            <p className='description'>{this.props.pet.type}</p>
          </Col>
          <Col xs={12} sm={2} xsHidden>
            <div><Link to={`/pet/${this.props.pet._id}`}><Button className='action-button center-block'>Details</Button></Link></div>
          </Col>
        </Col>
      </Row>
    )
  }
}

export default ListPetComponent
