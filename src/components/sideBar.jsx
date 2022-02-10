import React, { useState } from 'react';
import { 
  makeStyles,
  Container, 
  MenuList,
  MenuItem,
  ListItemIcon,
  Avatar,
  Typography,
  Collapse
} from '@material-ui/core';

import { 
  Dashboard,
  People,
  Store,
  Payment,
  Category,
  Settings,
  Equalizer,
  Loyalty,
  ExitToApp,
  Schedule,
  ExpandLess,
  ExpandMore,
  Person,
  AssignmentInd
 } from '@material-ui/icons';

 import { Link, withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

  sideBar:{
    background:'#303D41',
    height:'100vh'
  },
  rideLogo:{
    width:theme.spacing(15),
    height:theme.spacing(15)
  },
  nested:{
    paddingLeft:theme.spacing(4)
  }

}));

export default function SideBar() {

  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleClick = () => {

    setOpen(!open);
  }

  return <div className={classes.sideBar}>
       <Container style={{display:'flex', height:'20%', justifyContent:'center', alignItems:'center'}}>
              <Avatar alt="Ridebeauty" src="https://export-download.canva.com/gaPpI/DAEdgrgaPpI/50/0/0001-18522613655.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20220209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220209T002958Z&X-Amz-Expires=41369&X-Amz-Signature=767cef7f013a635a0996aa4e8b7fcfbf543d459735fad96e9998bded0f4e9049&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Ride%2520Beauty.png&response-expires=Wed%2C%2009%20Feb%202022%2011%3A59%3A27%20GMT" className={classes.rideLogo} />
            </Container>
            <MenuList >

              <Link to='/dashboard'>
                <MenuItem>
                  <ListItemIcon style={{color:'#D1D8DB'}}>
                      <Dashboard />
                  </ListItemIcon>
                  <Typography style={{color:'#D1D8DB'}}>Dashboard</Typography>
                </MenuItem>
              </Link>

                <MenuItem onClick={handleClick}>
                  <ListItemIcon style={{color:'#D1D8DB'}}>
                      <People />
                  </ListItemIcon>
                  <Typography style={{color:'#D1D8DB'}}>Users</Typography>
                  {open ? <ExpandLess /> : <ExpandMore />}
                </MenuItem>
             
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Link to='/salonowners'>
                    <MenuItem className={classes.nested}>
                      <ListItemIcon style={{color:'#D1D8DB'}}>
                          <AssignmentInd />
                      </ListItemIcon>
                      <Typography style={{color:'#D1D8DB'}}>Salon Owners</Typography>
                    </MenuItem>
                  </Link>

                  <Link to='/clients'>
                    <MenuItem className={classes.nested}>
                      <ListItemIcon style={{color:'#D1D8DB'}}>
                          <Person />
                      </ListItemIcon>
                      <Typography style={{color:'#D1D8DB'}}>Clients</Typography>
                    </MenuItem>
                  </Link>
                </Collapse>

              <MenuItem>
                <ListItemIcon style={{color:'#D1D8DB'}}>
                    <Store />
                </ListItemIcon>
                <Typography style={{color:'#D1D8DB'}}>Salons</Typography>
              </MenuItem>

              {/*To use as sample*/}

              <Link to='#'>
              
              </Link>

              <Link to='/bookings'>
                <MenuItem>
                  <ListItemIcon style={{color:'#D1D8DB'}}>
                      <Schedule />
                  </ListItemIcon>
                  <Typography style={{color:'#D1D8DB'}}>Bookings</Typography>
                </MenuItem>
              </Link>

              <MenuItem>
                <ListItemIcon style={{color:'#D1D8DB'}}>
                    <Payment />
                </ListItemIcon>
                <Typography style={{color:'#D1D8DB'}}>Finances</Typography>
              </MenuItem>

              <MenuItem>
                <ListItemIcon style={{color:'#D1D8DB'}}>
                    <Category />
                </ListItemIcon>
                <Typography style={{color:'#D1D8DB'}}>Categories</Typography>
              </MenuItem>

              <MenuItem>
                <ListItemIcon style={{color:'#D1D8DB'}}>
                    <Equalizer />
                </ListItemIcon>
                <Typography style={{color:'#D1D8DB'}}>Reports</Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon style={{color:'#D1D8DB'}}>
                    <Settings />
                </ListItemIcon>
                <Typography style={{color:'#D1D8DB'}}>Settings</Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon style={{color:'#D1D8DB'}}>
                    <Loyalty />
                </ListItemIcon>
                <Typography style={{color:'#D1D8DB'}}>Promos</Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon style={{color:'#D1D8DB'}}>
                    <ExitToApp />
                </ListItemIcon>
                <Typography style={{color:'#D1D8DB'}}>Logout</Typography>
              </MenuItem>
              
            </MenuList>
  </div>;

}
