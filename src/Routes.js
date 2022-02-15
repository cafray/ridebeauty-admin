import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProtectedRoutes from './Screens/adminViews/AdminRoutes';
import OwnerRoutes from './Screens/ownerViews/OwnerRoutes';
import LoginScreen from './Screens/LoginScreen';

export default function Routes() {

  return (
    <Router>
        <Switch>
            <Route path="/" exact component={LoginScreen} />
            <OwnerRoutes />
        </Switch>
    </Router>
  )
}
