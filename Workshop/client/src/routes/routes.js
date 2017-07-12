import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'

import HomeComponent from '../components/HomeComponent'
import NotFoundComponent from '../components/NotFoundComponent'

import LoginComponent from '../components/LoginComponent'
import RegisterComponent from '../components/RegisterComponent'
import LogoutComponent from '../components/LogoutComponent'
import AddPetComponent from '../components/AddPetComponent'
import AllPetsComponent from '../components/AllPetsComponent'
import SinglePetComponent from '../components/SinglePetComponent'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomeComponent} />
    <Route exact path='/not-found' component={NotFoundComponent} />
    <Route exact path='/login' component={LoginComponent} />
    <Route exact path='/register' component={RegisterComponent} />
    <Route exact path='/logout' component={LogoutComponent} />
    <PrivateRoute exact path='/pet/add' component={AddPetComponent} />
    <Route exact path='/pets' component={AllPetsComponent} />
    <PrivateRoute exact path='/pet/:id' component={SinglePetComponent} />

    <Route component={NotFoundComponent} />
  </Switch>
)

export default Routes
