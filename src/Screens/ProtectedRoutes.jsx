import React from 'react'
import { Route } from 'react-router-dom';
import { makeStyles, Grid } from '@material-ui/core';
import {createBrowserHistory} from 'history';
import NavBar from '../components/navBar';
import SideBar from '../components/sideBar';
import Bookings from './BookingsScreens';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Dashboard from './DashboardScreen';
import UserScreen from './UserScreen'
import Clients from './Clients';
import SalonOwners from './SalonOwners';

const useStyles = makeStyles({
    container:{
    }
});

export default function ProtectedRoutes() {

    var hist = createBrowserHistory();

    const classes = useStyles();

  return (
        <div className={classes.container}>
              <NavBar /> 
            <Grid container>
                <Grid item xs={2}>
                    <SideBar />
                </Grid>
                
                <Grid item xs={10}>
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/salonowners" exact component={SalonOwners} />
                    <Route path="/clients" exact component={Clients} />
                    <Route path="/bookings" exact component={Bookings} />
                </Grid>
            </Grid>
        </div>
  )
}
