import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class BookComponent extends Component {
  render () {
    return (
      <div>
        <h3><Link to={'/books/' + this.props._id}>{this.props.title}</Link></h3>
        <span>by <Link to={'/authors/' + this.props.author}>{this.props.author}</Link></span>
        <hr />
      </div>
    )
  }
}

export default BookComponent
