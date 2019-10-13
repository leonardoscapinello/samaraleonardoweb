import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Signin from '../pages/Signin'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />{' '}
      <Route path="/dashboard" exact component={Dashboard} />{' '}
      <Route path="/profile" exact component={Profile} />{' '}
    </Switch>
  )
}
