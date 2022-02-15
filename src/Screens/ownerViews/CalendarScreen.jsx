import React from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { 
  makeStyles,
  Container,
  Grid,
  Paper,
  Typography,
  SwipeableDrawer
 } from '@material-ui/core'

 import moment from 'moment'

 const localizer = momentLocalizer(moment)

export default function CalendarScreen() {

  const classes = useStyles();

  const myEventsList = [{
    title:"Test Appointment", 
    start:moment().toDate(),
    end:moment().add(30, 'minutes')
   }]

  return (

    <div>

    <Container className={classes.maincont}>

    <Grid container className={classes.rideCards}>
    

    </Grid>

    </Container>

        <Container className={classes.mapContainer}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography>
                    Calendar
                  </Typography>

                  <Calendar
                    localizer={localizer}
                    events={myEventsList}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: '70vh'}}
                    defaultView='week'
                    selectable
                  />

                </Grid>

              </Grid>
            </Container>

    </div>

    )
  
}

const useStyles = makeStyles((theme) =>({

  rideCards:{
    marginTop:theme.spacing(2)
  },
  rideCard:{
    width:'90%',
    height:100
  },
  mapContainer:{
    padding:theme.spacing(2),
    marginTop:theme.spacing(2)
  }

}));
