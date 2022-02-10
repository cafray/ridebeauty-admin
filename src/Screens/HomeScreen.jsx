import React from 'react';
import { 
   Container,
   makeStyles,
   AppBar,
   Toolbar,
   IconButton,
   Grid, 
   Menu,
   MenuList,
   MenuItem,
  ListItemIcon,
  Avatar,
  Typography,
  Paper
} from '@material-ui/core';

import { 
   AccountCircle,
   Dashboard,
   People,
   Store,
   Payment,
   Category,
   Settings,
   Equalizer,
   Loyalty,
   ExitToApp,
   Schedule
  } from '@material-ui/icons';

import Map from '../components/Map';

import SalonCard from '../components/salonCard';

const useStyles = makeStyles( (theme) => ( {

    container:{

    },
  
    ,
    ,
    mainGrid:{
      height:'100%'
    },
    rideLogo:{
      width:theme.spacing(15),
      height:theme.spacing(15)
    },
    ,
    

  }));
  
function HomeScreen() {

    const classes = useStyles();

  return <div className={classes.container}>
    
      <Grid container className={classes.mainGrid}> 
          <Grid item xs={2} className={classes.sideBar}>
            Side bar
          </Grid>
          <Grid item xs={10}>
            Content
          </Grid>
      </Grid>

    </div>;
}

export default HomeScreen;
