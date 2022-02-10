import React from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import { 
  makeStyles, 
  Container,
} from '@material-ui/core';
import moment from 'moment'


const localizer = momentLocalizer(moment)

const useStyles = makeStyles((theme)=>({

  container:{

  },
  bookingsHeader:{
      height:100
  },
  bookingsContent:{

  }

}))

export default function Bookings() {

  const myEventsList = [{
    title:"Evento tesste", 
    start:moment().toDate(),
    end:moment().add(30, 'minutes')
   }]

  const classes = useStyles();

  return <div className={classes.container}>

    <div className={classes.bookingsHeader}>

    </div>

    <div className={classes.bookingsContent}>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '70vh'}}
        defaultView='week'
      />
    </div>
  </div>;

}
