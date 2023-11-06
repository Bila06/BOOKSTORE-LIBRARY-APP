import { Box, Typography } from '@mui/material';
import React from 'react';

const About = () => {
  return <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{fontFamily:"fantasy"}} variant="h2"> this is crud application for book store</Typography>
        <Typography sx={{fontFamily:"fantasy"}} variant="h3"> created using mern stack</Typography>

      </Box>
    </div>;
  
};

export default About;
