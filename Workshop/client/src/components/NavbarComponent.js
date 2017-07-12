import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import ListItemLink from './sub-components/ListItemLink'
import Auth from '../Auth'

class NavbarComponent extends Component {
  render () {
    let registerLink
    let loginLink
    let logoutLink
    let addPetLink
    let petsLink = (<ListItemLink to='/pets'>All pets</ListItemLink>)
    if (!Auth.isUserAuthenticated()) {
      loginLink = (<ListItemLink to='/login'>Login</ListItemLink>)
      registerLink = (<ListItemLink to='/register'>Register</ListItemLink>)
    } else {
      logoutLink = (<ListItemLink to='/logout'>Logout</ListItemLink>)
      addPetLink = (<ListItemLink to='/pet/add'>Add pet</ListItemLink>)
    }
    return (
      <Navbar staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>React Project</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullLeft>
            <ListItemLink to='/'>Home</ListItemLink>
            {petsLink}
            
          </Nav>
          <Nav pullRight>
            {addPetLink}

            {loginLink}
            {registerLink}
            {logoutLink}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavbarComponent
