import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import queryString from 'query-string'

class AllBooks extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  componentDidUpdate () {
    let query = queryString.parse(this.props.location.search)
    console.log(query)
    return true
  }

  render () {
    return (
      <div>
        <h3>AllBooks</h3>
        <Link to={'/books/all/?page=0'}>Prev</Link>
        <Link to={'/books/all/?page=1'}>Next</Link>
      </div>
    )
  }
}

export default AllBooks
