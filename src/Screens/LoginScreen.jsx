import React from 'react'

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
  Box
 } from '@material-ui/core'

 import {Lock} from '@material-ui/icons';
 
export default function LoginScreen() {

  const classes = useStyles();

  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          Ridebeauty
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  return (

    <div>
     
      <Grid container className={classes.container}>
        <Grid item xs={6} className={classes.image}/>
        <Grid item xs={6}>
          <Paper className={classes.paperContent} elevation={6} >
            <Avatar className={classes.avatar}>
              <Lock />
            </Avatar>
            <Typography>
              Sign In
            </Typography>

            <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>

          </Paper>
        </Grid>
      </Grid>
      
    </div>

  )

}

const useStyles = makeStyles((theme) =>({

  container:{
    height:'100vh'
  },
  image:{
    backgroundImage: 'url(https://media1.popsugar-assets.com/files/thumbor/g8tJPAQsNeQVF1k_3NmL2JpRDe4/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2022/01/06/745/n/1922153/tmp_P4odR4_765c053d49c2390b_GettyImages-1350573811.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paperContent:{
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height:'100vh',
    padding:theme.spacing(5)
  },
  avatar:{
    margin:theme.spacing(5),
    backgroundColor:'#D43295'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor:'#D43295'
  },

}));
