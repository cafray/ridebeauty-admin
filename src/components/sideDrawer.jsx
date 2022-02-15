import React,{ useState } from 'react'
import { 
    makeStyles,
    SwipeableDrawer,
    Paper,
    Grid,
    IconButton,
    Container
 } from '@material-ui/core'

 import AddEmployee from './addEmployee';

 import { Close } from '@material-ui/icons';

function SideDrawer(props) {

    const classes = useStyles();

  return (

    <div>
        <SwipeableDrawer
            anchor={'right'}
            open={props.open}
            onClose={!props.toggleDrawer}
            onOpen={props.toggleDrawer}
          >
            <Paper className={classes.drawerContent}>
                <div>
                    <IconButton>
                        <Close onClick={props.toggleDrawer}/>                   
                     </IconButton>
                </div>
                <Container>
                  <AddEmployee />
                </Container>
            </Paper>
            
        </SwipeableDrawer>

    </div>

  )

}

const useStyles = makeStyles((theme) =>({

    container:{

    },
    drawerContent:{
        width:500,
        height:'100vh'
    }
  }));

export default SideDrawer