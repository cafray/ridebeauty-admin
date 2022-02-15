import React from 'react'

import { 
    makeStyles,
    Container,
    Grid,
    Paper,
    Typography,
    Button,
    Tabs,
    Tab,
    TextField 
   } from '@material-ui/core'

function SettingsInfo() {

  const classes = useStyles();

  return (
    <div className={classes.container}>
        <div>
           <Typography>Salon Basic Information</Typography>
        </div>
       <form className={classes.form}>
            <TextField 
                id="outlined-basic"
                label="Name"
                variant="outlined"
                margin="normal"
                fullWidth
                />
            <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="outlined"
                margin="normal"
                fullWidth
                />
            <TextField 
                id="outlined-basic"
                label="Website"
                variant="outlined"
                margin="normal"
                fullWidth
                />
            <TextField 
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                margin="normal"
                fullWidth
                />                
        </form>
    </div>
  )
}

const useStyles = makeStyles((theme) =>({
    container:{
      padding:theme.spacing(2)
    },
    form:{

    }
  
  }));

export default SettingsInfo