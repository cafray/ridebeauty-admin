import React, {useState} from 'react'

import {
    makeStyles,
    Container,
    Grid,
    Paper,
    Typography,
    Avatar,
    FormControlLabel,
    TextField,
    Checkbox,
    Link,
    Button,
    Box,
    Select,
    Chip,
    MenuItem,
    Input,
    InputLabel,
    Tabs,
    Tab,
   } from '@material-ui/core'
   
   import { AccountCircle } from '@material-ui/icons';

   
function AddEmployee() {
    
    const [services, setServices] = useState([]);
    const [value, setValue] = useState(0);

    const classes = useStyles();

    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
      ];

     
    const handleChange = (event) => {
        setServices(event.target.value);
      };

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

        <Tabs
          value={value}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Working Schedule" {...a11yProps(1)} />
        </Tabs>

        <TabPanel value={value} index={0}>
            
        <form className={classes.form} noValidate>

<div className={classes.profilePicture}>
    <Avatar className={classes.avatar}>
        <AccountCircle />
    </Avatar>
</div>

<div className={classes.nameSection}>
    <TextField id="outlined-basic" label="First Name" variant="outlined" />
    <TextField id="outlined-basic" label="Last Name" variant="outlined" />
</div>
<div className={classes.sectionTwo}>
    <TextField 
        id="outlined-basic"
        label="Email"
        variant="outlined"
        margin="normal"
        fullWidth
    />
    <TextField 
        id="outlined-basic"
        label="Password"
        margin="normal"
        variant="outlined"
        fullWidth
    />
   
   <InputLabel id="demo-mutiple-chip-label">Select Services</InputLabel>
    
   <Select
        labelId="demo-mutiple-chip-label"
        id="demo-mutiple-chip"
        multiple
        value={services}
        onChange={handleChange}
        input={<Input id="select-multiple-chip" />}
        renderValue={(selected) => (
            <div className={classes.chips}>
                {selected.map((value) => (
                    <Chip key={value} label={value} className={classes.chip} />
                ))}
            </div>
        )}
        fullWidth
        variant="outlined"
        className={classes.rideSelect}
        >
        {names.map((name) => (
            <MenuItem key={name} value={name}>
                {name}
            </MenuItem>
        ))}
    </Select>

    <TextField 
        id="outlined-basic"
        label="Phone Number"
        margin="normal"
        variant="outlined"
        fullWidth
    />
    
</div>

        </form>

        </TabPanel>

        <TabPanel value={value} index={1}>
                <form className={classes.form}>

                    <div>
                        Sunday

                    </div>


                </form>
        </TabPanel>        

    </div>

  )
}

function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

const useStyles = makeStyles((theme) =>({

    container:{
      height:'100vh'
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    nameSection:{
        display:'flex',
        justifyContent:'space-between',
        marginBottom:theme.spacing(2)
    },
    sectionTwo:{

    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    chip: {
        margin: 2,
      },
    rideSelect:{
       borderWidth:1,
       borderColor:'black',
       borderRadius:20
    },
    profilePicture:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:10
    },
    avatar:{
        width:100,
        height:100
    }
  }));
  

export default AddEmployee