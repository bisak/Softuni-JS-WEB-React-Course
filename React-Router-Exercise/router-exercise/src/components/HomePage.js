import React, { Component } from 'react'
import {getBooksForHomePage} from '../Data'
import {Link} from 'react-router-dom'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      books: []
    }
  }

  componentWillMount () {
    getBooksForHomePage().then((data) => {
      this.setState({
        books: data
      })
    })
  }

  render () {
    let books = this.state.books.map((book) => (
      <div key={book._id}>
        <h3><Link to={'/books/' + book._id}>{book.title}</Link></h3>
        <span>{book.author}</span>
        <hr />
      </div>

    ))

    return (
      <div>
        {books}
      </div>
    )
  }
}

export default HomePage
