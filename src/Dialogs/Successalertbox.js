import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {Button}  from '@material-ui/core';
import { lightGreen } from '@material-ui/core/colors';
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  textField: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 3,
    marginTop: 0,
   borderColor:lightGreen,
  fontWeight: 500
  },
  input: {
    color: "brown",

    fontSize:20,
    fontWeight:500
  },
  
}));

const Successalertbox =(props)=>{

  const classes=useStyles();

  function Myhome(){

props.onhome();
  }
return (<div>


{console.log("success alert box")}


<Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="100vh"
>

<Alert className= {classes.input} severity="success" sx={{
    width: '30%',
   
   margin: 'auto',
fontColor:'green',
  backgroundColor: 'green'
  }}
 
  color="success">
  <AlertTitle>Success</AlertTitle>
  Login successfully done —  <Button type='submit' color='primary' variant="contained" onClick={Myhome}>okay</Button>
</Alert>
</Box>
  </div>)


}
export default Successalertbox;

/*

<Stack  container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center" sx={{ width: '40%' }} >

*/
