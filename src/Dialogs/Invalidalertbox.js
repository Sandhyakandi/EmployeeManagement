import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {Button}  from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  textField: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 3,
    marginTop: 0,
 
  
    fontWeight: 500
  },
  input: {
    color: "white",
    
    fontSize:20,
    fontWeight:500
  },
  
}));


const Invalidalertbox =(props)=>{
  const classes=useStyles();
function closeDialog(){
  props.onClose();
}

return (<div>


{console.log("Inalid alert box")}
<Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="100vh"
>
<Alert className= {classes.input} severity="error" sx={{
    width: '30%',
   margin: 'auto',

  backgroundColor: 'white'
  }}
 
  color="error">
  <AlertTitle>Warning</AlertTitle>
Invalid Login credentials,please check. <Button type='submit' color='primary' variant="contained" onClick={closeDialog}>okay</Button>
</Alert>
</Box>
  </div>)


}
export default Invalidalertbox;


