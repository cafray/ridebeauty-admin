import React, {useState} from 'react'

import { 
    makeStyles,
    Container,
    Grid,
    Paper,
    Typography,
    Button,
    Tabs,
    Tab,
    TextField,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    FormControlLabel,
    Checkbox,
    FormGroup
   } from '@material-ui/core'

function WorkingSchedule() {

    const classes = useStyles();
    const [age, setAge] = useState('');
    const [state, setState] = useState({
        gilad: true,
        jason: false,
        antoine: false,
      });

    const handleChange = (event) => {
        setAge(event.target.value);
      };

      const handleCheckChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      }; 
      const { gilad, jason, antoine } = state;


  return (

    <div className={classes.container}>

        <div>
           <Typography>Working Schedule</Typography>
        </div>
        
        <FormGroup>
        <div className={classes.weekday}>

        <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleCheckChange} name="gilad" />}
            label="Monday"
        />

        <FormControl variant="outlined" className={classes.formControl}>

        <InputLabel id="demo-simple-select-outlined-label">Start Time</InputLabel>
        <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={age}
            onChange={handleChange}
            label="Start time"
            >
        <MenuItem value="">
            <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </FormControl>

    <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">End Time</InputLabel>
        <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={age}
            onChange={handleChange}
            label="End Time"
            >
        <MenuItem value="">
            <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </FormControl>

        </div>
        
        </FormGroup>

    </div>

  )
}

const useStyles = makeStyles((theme) =>({

    container:{
      padding:theme.spacing(2)
    },
    formControl: {
        margin: theme.spacing(1),
        width:200
      },
    selectEmpty: {
        marginTop: theme.spacing(2),
      },
      weekday:{
          display:'flex',
          justifyContent:'space-between',
      }
  }));

export default WorkingSchedule