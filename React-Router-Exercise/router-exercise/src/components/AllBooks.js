import React, { Component } from 'react'
import queryString from 'query-string'
import AllBooksStore from '../stores/AllBooksStore'
import AllBooksActions from '../actions/AllBooksActions'
import Book from './sub-componentns/BookComponent'

class AllBooks extends Component {
  constructor (props) {
    super(props)
    this.state = AllBooksStore.getState()
    this.onChange = this.onChange.bind(this)
  }

  onNextPageClick () {
    const nextPage = this.getPage() + 1
    this.props.history.push(`?page=${nextPage}`)
    AllBooksActions.getOnePageBooks(nextPage)
  }

  onPrevPageClick () {
    const prevPage = this.getPage() - 1
    if (prevPage > 0) {
      this.props.history.push(`?page=${prevPage}`)
      AllBooksActions.getOnePageBooks(prevPage)
    }
  }

  getPage () {
    let query = queryString.parse(this.props.location.search)
    return Number(query.page) || 1
  }

  componentDidMount () {
    AllBooksStore.listen(this.onChange)
    AllBooksActions.getOnePageBooks(this.getPage())
  }

  componentWillUnmount () {
    AllBooksStore.unlisten(this.onChange)
  }

  onChange (state) {
    this.setState(state)
  }

  render () {
    let books = this.state.books.map((book) => {
      return (<Book key={book._id} {...book} />)
    })
    return (
      <div>
        <h3>All books</h3>
        <hr />
        {books}
        <button type='button' onClick={this.onPrevPageClick.bind(this)}>Prev</button>
        <button type='button' onClick={this.onNextPageClick.bind(this)}>Next</button>
        <br />
        <br />
      </div>
    )
  }
}

export default AllBooks
