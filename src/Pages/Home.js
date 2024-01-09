import React from 'react';
import Homenavbar from './Homenavbar';
import "../assets/css/Home.css";
import {Container,Box,Typography} from '@mui/material';

const Home = () => {
  return (
    <div>

      <Homenavbar/>
      <Container component="main" maxWidth="lg">
      <Box 
      component="div"
      className="image-div"
      sx={{mb:7,
           backgroundImage: "url(https://img.freepik.com/premium-photo/modern-minimalist-interior-with-armchair-empty-cream-color-wall-background-3d-rendering_41470-4014.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",}}
      >
        <Typography variant='h6'
         sx={{my:30,mx:50,fontSize:32,color:"#0073e6",fontWeight:500}}
        >Welcome Employee's</Typography>
      </Box>
      </Container>
    </div>
  )
}

export default Home