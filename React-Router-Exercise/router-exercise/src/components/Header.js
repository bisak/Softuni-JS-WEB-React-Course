import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Header extends Component {
  render () {
    return (
      <div className='header'>
        <Link to='/'>Home</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to='/books/all'>Books</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to='/authors/all'>Authors</Link>
      </div>
    )
  }
}

export default Header
