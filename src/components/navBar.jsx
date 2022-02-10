import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

const useStyles = makeStyles({
    
    menuContent:{
        display:'flex',
    },
    toolBar:{
        background:'#303D41',
        justifyContent:'flex-end'
      },
});

export default function NavBar() {

    const classes = useStyles();

  return (
    <div>
    <AppBar position="static">
      <Toolbar className={classes.toolBar}>
         <div className={classes.menuContent}>
              <IconButton
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
         </div>
      </Toolbar>
    </AppBar>

    </div>
  )
}
