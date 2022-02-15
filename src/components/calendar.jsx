import React from 'react'

import { 
    makeStyles,
    Container,
    Grid,
    Paper,
    Typography,
   } from '@material-ui/core'

export default function calendar() {

    const classes = useStyles();

  return (

    <div>

    <Container className={classes.maincont}>

    <Grid container className={classes.rideCards}>
    

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
  