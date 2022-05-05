import React from 'react';
import { Routes,Route ,Navigate} from 'react-router-dom';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from "@material-ui/core";
import './Login.css';
//import LoadingSpinner from '../UI/LoadingSpinner';
import {useState , useEffect} from 'react';
import useHttp from './../hooks/use-http';
import getAllLogindata from './../lib/api';
import LoadingSpinner from './../UI/LoadingSpinner';
import {useNavigate} from 'react-router-dom';
import Home from './Home';
import { blueGrey, brown, lightBlue, lightGreen } from '@material-ui/core/colors';
import { blue } from '@mui/material/colors';
import Invalidalertbox from './../Dialogs/Invalidalertbox';
import Successalertbox from './../Dialogs/Successalertbox';

const useStyles11 = makeStyles(() => ({
  textField: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 3,
    marginTop: 0,
   borderColor:blue,
   backgroundColor:lightGreen,
    fontWeight: 500
  },
  input: {
    color: "brown",
    fontSize:20,
    fontWeight:500
  },
  
}));
const Login=()=>{
const classes=useStyles11();

const[isvalid,setisvalid]=useState(0);
  const [uname,setuname]=useState();
  const[pwd,setpwd]=useState();
  const navi=useNavigate();
  //   navi("/home");
  //const textstyle={padding:5};
  const paperStyle={padding :20,height:'70vh',width:280, margin:"5px auto"};
  const avatarStyle={backgroundColor:'#1bbd7e'};
  
  const btnstyle={margin:'10px 0'};




  const { sendRequest, status, data: Loadlogindata, error } = useHttp(
    getAllLogindata,
    true
  );
  
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  


  if (status === 'pending') {
    return (
      <div className='centered'>
        {console.log("loader")}
        <LoadingSpinner />
      </div>
    );
  }


  function submitlogin(event){

    event.preventDefault();
    


    if (status === 'completed' && (Loadlogindata.un === uname && Loadlogindata.pw === pwd)) {
     setisvalid(1);
  }
  
  else  if (status === 'completed' && (!(Loadlogindata.un === uname && Loadlogindata.pw === pwd))) {
     setisvalid(2);
    }
    else{
      console.log("Last else block");
    }
   


//    navi('/home');

      }
    function Myhomepage(){
      navi('/home');
    }

function closealert(){
setisvalid(0);
}
    if(isvalid === 1){
return (
  <div>
    <Successalertbox onhome={Myhomepage}/>
    
  </div>);

    }
 else if(isvalid === 2){
  return(<div>
    <Invalidalertbox onClose={closealert}/>
  </div>); 
 }
return(
  <div className="Login">
    <form onSubmit={submitlogin}>
    <Grid
    container
    spacing={0}
    direction="row"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh',padding:10 }}>
          <Paper elevation={10} style={paperStyle}>
              <Grid align='center'>
                   <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                  <h2>Sign In</h2>
              </Grid>
              <TextField  label='Username' id="outlined-basic"  margin="normal"
        InputProps={{
          className: classes.input,
          className:classes.textField
        }}
        variant="outlined"
         placeholder='Enter username' fullWidth required onChange={(event)=>setuname(event.target.value)}/>
              <TextField label='Password' id="outlined-basic" className={classes.textField} margin="normal"
        InputProps={{
          className: classes.input
        }}
        variant="outlined"
       placeholder='Enter password'  type='password' fullWidth required onChange={(event)=>setpwd(event.target.value)}/>
             
              <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
          
          </Paper>
      </Grid>

      </form>
      </div>
  )
      
};

export default Login;

/*





/*
<Grid container style={{minHeight:"100vh"}}>
   <Grid item xs={12} sm={6}>
<img src={backgroundoffice}  alt="Office image" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
     </Grid>
     </Grid>
     <Grid container item xs={12} sm={6} justify ="space-between" direction="column" alignItems ="center"style={{padding:10}}> 
      <div style={{display:"flex",flexDirection:"column",maxWidth:400,minWidth:300}}>
       </div>
      <Grid container justify="center">
     <img src={Logo1}  alt="Office image" alt="logo design"/>
       </Grid>

      </Grid>



 <Card  variant="outlined" style={{ background: '#FFB6C1' ,maxWidth: 450, padding: "20px 5px", margin: "0 auto"
       }}>
          <CardContent>
          <Typography gutterBottom variant="h4" align="center" style={{color:"Blue"}}>
       Login Page
       </Typography>
         
            <Typography variant="body2" style={{color:"brown"}}  gutterBottom> 
              Please fill your credentials.
          </Typography> 
            <form>
              <Grid container spacing={1}>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            
            <TextField id="input-with-sx" variant="standard" onChange={(event)=>setusername("Admin")} />
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          </Box>
               
          <PasswordField
  hintText="At least 8 characters"
  floatingLabelText="Enter your password"
  errorText="Your password is too short"
  onChange={(event)=>setPassword("Admin123")}
/>  
                <Grid item xs={12}>
                  <Button type="submit" size="large" variant="contained" color="primary" onClick={LoginFun} fullWidth>Login</Button>
                </Grid>

    
              </Grid>
            </form>
          </CardContent>
        </Card>




        */