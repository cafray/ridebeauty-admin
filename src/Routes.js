import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BookingsScreens from './Screens/BookingsScreens';
import ProtectedRoutes from './Screens/ProtectedRoutes';

export default function Routes() {

  return (
    <Router>
        <Switch>
            <Route path="/" exact component={BookingsScreens} />
            <ProtectedRoutes />
        </Switch>
    </Router>
  )
}
