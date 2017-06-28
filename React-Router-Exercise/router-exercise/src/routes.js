import { Route, Switch } from 'react-router-dom'
import React from 'react'
import NotFoundPage from './components/NotFoundPage'
import HomePage from './components/HomePage'
import AllAuthors from './components/AllAuthors'
import SingleAuthor from './components/SingleAuthor'
import AllBooks from './components/AllBooks'
import SingleBook from './components/SingleBook'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/books/all' component={AllBooks} />
    <Route path='/books/:id' component={SingleBook} />
    <Route path='/authors/all' component={AllAuthors} />
    <Route path='/authors/:id' component={SingleAuthor} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default Routes
