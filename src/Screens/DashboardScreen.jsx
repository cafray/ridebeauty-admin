import React from 'react'
import { 
   makeStyles,
   Container,
   Grid,
   Paper,
   Typography,
  } from '@material-ui/core'
import Map from '../components/Map';
import SalonCard from '../components/salonCard';

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

export default function Dashboard() {

  const classes = useStyles();

  return (

    <div>
        <Container className={classes.maincont}>
              <Grid container className={classes.rideCards}>
                <Grid item xs={3}>
                  <Paper className={classes.rideCard}>
                      Revenue
                  </Paper>
                </Grid>

                <Grid item xs={3}>
                  <Paper className={classes.rideCard}>
                      Users 
                  </Paper>
                </Grid>

                <Grid item xs={3}>
                  <Paper className={classes.rideCard}>
                      Salons
                  </Paper>
                </Grid>

                <Grid item xs={3}>
                  <Paper className={classes.rideCard}>
                      Bookings
                  </Paper>
                </Grid>

              </Grid>
            </Container>
            <Container className={classes.mapContainer}>
              <Grid container>
                <Grid item xs={9}>
                  <Map />
                </Grid>
                <Grid item xs={3}>
                  <Typography>
                    Salons in Johannesburg
                  </Typography>
                  <SalonCard />
                </Grid>
                 
              </Grid>
            </Container>
    </div>
  )
}
