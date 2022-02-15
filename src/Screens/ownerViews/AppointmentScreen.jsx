import React from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import { 
  makeStyles, 
  Container,
} from '@material-ui/core';
import moment from 'moment'


const useStyles = makeStyles((theme)=>({

  container:{

  },


}))

export default function Appointments() {

  const classes = useStyles();

  return <div className={classes.container}>



  </div>;

}
