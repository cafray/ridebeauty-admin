import React, {useState} from 'react';
import { 
  makeStyles,
  Container,
  Grid,
  Paper,
  Typography,
  Button
 } from '@material-ui/core'
 
import { DataGrid } from '@material-ui/data-grid';
import SideDrawer from '../../components/sideDrawer';

export default function StaffScreen() {

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {

    setOpen(!open);

  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${
          params.getValue(params.id, 'lastName') || ''
        }`,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  
  return <div className={classes.container}>

    <Grid container className={classes.actionGrid}>
        <Grid item xs={6}>
          <Typography>
            Staff table            
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.buttonContainer}>
          <Button 
            variant="contained" 
            className={classes.rideButton}
            onClick={toggleDrawer}
            >
            Add New
          </Button>
        </Grid>
    </Grid>

    <Container className={classes.dataContent}>
      <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
    </Container>
    <SideDrawer toggleDrawer={toggleDrawer} open={open}/>
  </div>;

}

const useStyles = makeStyles((theme) =>({

  container:{
    height:'100vh'
  },
  actionGrid:{
    margin:theme.spacing(3)
  },
  rideButton:{
    backgroundColor: '#D43295',
    color:'white',
    margin:theme.spacing(5),
    borderRadius:5
  },
  buttonContainer:{
    display:'flex',
    justifyContent:'end',
  },
  dataContent:{
    height:'65vh'
  }

}));

