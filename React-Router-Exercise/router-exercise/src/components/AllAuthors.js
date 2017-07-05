import React, { Component } from 'react'
import queryString from 'query-string'
import AllAuthorsStore from '../stores/AllAuthorsStore'
import AllAuthorsActions from '../actions/AllAuthorsActions'
import { Link } from 'react-router-dom'

class AllAuthors extends Component {
  constructor (props) {
    super(props)
    this.state = AllAuthorsStore.getState()
    this.onChange = this.onChange.bind(this)
    this.changeSort = this.changeSort.bind(this)
    this.sort = 'asc'
  }

  onNextPageClick () {
    const nextPage = this.getPage() + 1
    this.props.history.push(`?page=${nextPage}`)
    AllAuthorsActions.getOnePageAuthors(nextPage, this.sort)
  }

  onPrevPageClick () {
    const prevPage = this.getPage() - 1
    if (prevPage > 0) {
      this.props.history.push(`?page=${prevPage}`)
      AllAuthorsActions.getOnePageAuthors(prevPage, this.sort)
    }
  }

  getPage () {
    let query = queryString.parse(this.props.location.search)
    return Number(query.page) || 1
  }

  componentDidMount () {
    AllAuthorsStore.listen(this.onChange)
    AllAuthorsActions.getOnePageAuthors(this.getPage())
  }

  componentWillUnmount () {
    AllAuthorsStore.unlisten(this.onChange)
  }

  onChange (state) {
    this.setState(state)
  }

  changeSort (ev) {
    this.sort = ev.target.value
    AllAuthorsActions.getOnePageAuthors(this.getPage(), this.sort)
  }

  render () {
    let authors = this.state.authors.map((author, index) => {
      return (<h3 key={index}>author {index + 1 + this.getPage() * 10 - 10}: <Link to={'/authors/' + author}> {author} </Link></h3>)
    })
    return (
      <div>
        <h3>All authors</h3>
        <select onChange={this.changeSort} name='sort'>
          <option default value='asc'>
            Ascending
          </option>
          <option value='desc'>
            Descending
          </option>
        </select>
        <hr />
        {authors}
        <button type='button' onClick={this.onPrevPageClick.bind(this)}>
          Prev
        </button>
        <button type='button' onClick={this.onNextPageClick.bind(this)}>
          Next
        </button>
        <br />
        <br />
      </div>
    )
  }
}

export default AllAuthors
