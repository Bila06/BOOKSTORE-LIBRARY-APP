import { Box, Typography } from '@mui/material';
import React from 'react';
import picture from "./drop.jpg";
import brog from "./brog.webp";


const About = () => {
  return <div style={{backgroundImage: `url(${brog})`,
  height: "665px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  
  }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{marginTop:3}} variant="h1"> BOOKSTORE LIBRARY APP </Typography>
        <Typography sx={{marginTop:15}} variant="h3"> GET YOUR BOOK TODAY !!</Typography>
        <Typography sx={{marginTop:10}} variant="h5"> We provide you with the knowledge 
        you need.</Typography>
        <Typography  variant="h5" >Struggling with school work! come get the book that will help  you.</Typography>
        <Typography  variant="h5">You struggling to get more information to teach! come get a book that will help you.</Typography>
        <Typography variant="h5"> You want good a good story book! we got you </Typography>

      </Box>
    </div>;
  
};

export default About;
