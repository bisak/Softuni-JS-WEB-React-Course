import React, { Component } from 'react'
import AllBooksActions from '../actions/AllBooksActions'
import AllBooksStore from '../stores/AllBooksStore'
import Book from './sub-componentns/BookComponent'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = AllBooksStore.getState()
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount () {
    AllBooksStore.listen(this.onChange)
    AllBooksActions.getHomePageBooks()
  }

  componentWillUnmount () {
    AllBooksStore.unlisten(this.onChange)
  }

  onChange (state) {
    this.setState(state)
  }

  render () {
    let books = this.state.books.map((book) => (
      <Book key={book._id} {...book} />
    ))

    return (
      <div>
        {books}
      </div>
    )
  }
}

export default HomePage
