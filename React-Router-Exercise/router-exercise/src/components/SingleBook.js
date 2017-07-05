import React, { Component } from 'react'
import BookActions from '../actions/BookActions'
import BookStore from '../stores/BookStore'
import {Link} from 'react-router-dom'

class SingleBook extends Component {
  constructor (props) {
    super(props)
    this.params = this.props.match.params
    this.state = BookStore.getState()
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount () {
    BookStore.listen(this.onChange)
    BookActions.getBookById(this.params.id)
  }

  componentWillUnmount () {
    BookStore.unlisten(this.onChange)
  }

  onChange (state) {
    this.setState(state)
  }

  render () {
    let bookComments = this.state.book.comments.map((comment, index) => {
      return (<h5 key={index}>Comment {index + 1}: {comment}</h5>)
    })
    return (
      <div>
        <h2>Title: {this.state.book.title}</h2>
        <h3>Author: <Link to={'/authors/' + this.state.book.author}>{this.state.book.author}</Link> </h3>
        <h5>Price: ${this.state.book.price}</h5>
        {bookComments}
      </div>
    )
  }
}

export default SingleBook
