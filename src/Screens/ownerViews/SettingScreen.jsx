import React,{ useState } from 'react';

import { 
  makeStyles,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Tabs,
  Tab,
 } from '@material-ui/core'

 import { Phone } from '@material-ui/icons';

 import SettingsInfo from '../../components/settingsInfo';
 import WorkingSchedule from '../../components/workingSchedule';

export default function SettingScreen() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  //Tab Functions start

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTabChangeIndex = (index) => {
    setValue(index);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <div>
            {children}
          </div>
        )}
      </div>
    );
  }
  
   //Tab Functions end

  return (
    <div className={classes.container}>
      
      <div className={classes.settingsHeader}>

      </div>

      <Grid container >
        <Grid item xs={3} style={{display:'flex', justifyContent:'end'}}>
        <Paper elevation={3} className={classes.leftPaper}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Info" {...a11yProps(0)} />
            <Tab label="Location" {...a11yProps(1)} />
            <Tab label="Working Schedule" {...a11yProps(2)} />
            <Tab label="Salon Location" {...a11yProps(3)} />
          </Tabs>

        </Paper>
        
        </Grid>

        <Grid item xs={9} className={classes.settingsRight}>

        <TabPanel value={value} index={0}>

            <Paper elevation={3} className={classes.rightPaper}>
              <SettingsInfo />
            </Paper>
                
        </TabPanel>      

        <TabPanel value={value} index={1}>
            <Paper elevation={3} className={classes.rightPaper}>
              Location
            </Paper>
        </TabPanel>

        <TabPanel value={value} index={2}>
             <Paper elevation={3} className={classes.rightPaper}>
             <WorkingSchedule />
            </Paper>
        </TabPanel>          

        </Grid>

      </Grid>

      
    </div>)
}

const useStyles = makeStyles((theme) =>({
  container:{
    
  },
  settingsHeader:{
    height:150
  },
  settingsRight:{
    paddingLeft:theme.spacing(5)
  },
  rightPaper:{
    
  },
  leftPaper:{
    width:'80%'
  }

}));

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
