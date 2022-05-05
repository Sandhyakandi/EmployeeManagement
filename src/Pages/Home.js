import React from "react";
import { Link } from "react-router-dom";
import CoverImage from "./backgroundoffice.jpeg";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import "./Home.css";

import Navbar from './Navbar';
function Home() {
  return (

    <div>
        <Navbar/>

    <div>


      <div className="headerContainer">


      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '', height: '100vh' }} >
        <h1 style={{ fontWeight: "bold" }}> Welcome ADMIN </h1>
        <p>This application mainly focuses on Admin portal. 
        Maintaining accurate and up-to-date employee records is necessary for any organization.
All institutions use an employee record management system to store
employee information for effectively carrying out day-to-dayactivities.
In the digital approach,the datais stored in the form of electronic
records for easy access,updating.There is one database of records at a
single location that is easy to manage and retain.
The electronic record keeping system that automates the organization
and maintains employee records is called the employee record
managementsystem.
      
        </p>
        </Box>
      </Container>
        
       
       
      </div>
    </div>
    </div>
  );
}

export default Home;


/*


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid() {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="/static/images/grid/complex.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Welcome Admin
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
    
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $19.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}


new

import * as React from 'react';


export default function FixedContainer() {
  return (
    <React.Fragment>
   
    </React.Fragment>
  );
}




*/





// <Footer/>

//<div className="home" style={{ backgroundImage: `url(${CoverImage})` }}>