import React, { Component } from 'react'
import AuthorActions from '../actions/AuthorActions'
import AuthorStore from '../stores/AuthorStore'
import Book from './sub-componentns/BookComponent'

class SingleAuthor extends Component {
  constructor (props) {
    super(props)
    this.params = this.props.match.params
    this.state = AuthorStore.getState()
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount () {
    AuthorStore.listen(this.onChange)
    AuthorActions.getAuthorById(this.params.id)
  }

  componentWillUnmount () {
    AuthorStore.unlisten(this.onChange)
  }

  onChange (state) {
    this.setState(state)
  }

  render () {
    let books = this.state.author.map((book, index) => {
      return (<Book key={index} {...book} />)
    })
    return (
      <div>
        <h2>Name: {this.params.id}</h2>
        <h2>Books:</h2>
        {books}
      </div>
    )
  }
}

export default SingleAuthor
