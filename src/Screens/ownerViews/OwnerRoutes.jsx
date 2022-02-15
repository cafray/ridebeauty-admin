import React from 'react'
import { Route } from 'react-router-dom';
import { makeStyles, Grid } from '@material-ui/core';
import {createBrowserHistory} from 'history';

//importing salon owner screens/views

import NavBar from '../../components/navBar';
import OwnerSideBar from '../../components/ownerSideBar';
import Dashboard from './DashboardScreen';
import CalendarScreen from './CalendarScreen';
import Appointments from './AppointmentScreen';
import Clients from './ClientScreen';
import StaffScreen from './StaffScreen';
import ServiceScreen from './ServiceScreen';
import SettingScreen from './SettingScreen';
import RevenueReport from './RevenueReport';
import ClientReport from './ClientReport';
import AppointmentReport from './AppointmentReport'
import BranchScreen from './BranchScreen';
import ReviewScreen from './ReviewScreen';

const useStyles = makeStyles({
    container:{
    }
});

export default function OwnerRoutes() {

    var hist = createBrowserHistory();

    const classes = useStyles();

  return (

        <div className={classes.container}>
              <NavBar /> 
            <Grid container>

                <Grid item xs={2}>
                    <OwnerSideBar />
                </Grid>
                
                <Grid item xs={10}>
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/calendar" exact component={CalendarScreen} />
                    <Route path="/appointments" exact component={Appointments} />
                    <Route path="/staff" exact component={StaffScreen} />
                    <Route path="/clients" exact component={Clients} />
                    <Route path="/services" exact component={ServiceScreen} />
                    <Route path="/branches" exact component={BranchScreen} />
                    <Route path="/reports/revenue" exact component={RevenueReport} />
                    <Route path="/reports/clients" exact component={ClientReport} />
                    <Route path="/reports/appointments" exact component={AppointmentReport} />
                    <Route path="/reviews" exact component={ReviewScreen} />
                    <Route path="/settings" exact component={SettingScreen} />
                </Grid>
            </Grid>
        </div>
  )
}
