import React from 'react'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import aboutUsImg from "../../assets/about-us.jpg"
import AboutUsCard from './AboutUsCard'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Typewriter from 'typewriter-effect';

// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();

const AboutUs = () => {

  return (
    <Container sx={{maxWidth:"1260px", paddingTop:{xs:"65px", md:"120px"}, paddingX:{xs:"30px", md:'0'}}} id="aboutUs">
        <Stack flexDirection={{ xs: 'column', md: 'row' }} flex alignItems='center' gap={{ xs: 5, md: 8 }}>

        {/* About us image */}
        <Box data-aos="fade-up-right" sx={{ flex: '1.4',backgroundColor:"red",paddingY:{xs:"40px",md:"52px"},paddingX:{xs:"25px", md:"15px"} }}>
          <img src={aboutUsImg} alt='whoWeAre' height={525} width={533}  className='rounded-3xl'/>
        </Box>

        {/* About us description is here */}
        <Box data-aos="fade-up-left" sx={{ flex: '1.5', textAlign:{xs:"center", md:"left"} }}>
         <Box>
        <Typography variant="subtitle1" sx={{ color: 'text.disabled', textAlign:{xs:"center", md:"left"} }}>
          WHO WE ARE
        </Typography>
        <Stack gap='24px' >
          <Typography variant="h2" sx={{ fontSize:{xs:"35px", md:"45px"} }}>
            
          { <Typewriter
               options={{
                 strings: ['About', 'Nitex'],
                 autoStart: true,
                 loop: true,
               }}
             />}
          </Typography>
          
             
            
          <Typography variant="body1" sx={{ fontWeight:'500',  textDecoration:"underline" }}>
          Nitex: A Bangladeshi startup that helps anyone from anywhere set up their own clothing brand. Founded in 2017, Nitex provides an end-to-end supply chain platform to SME apparel brands and individual entrepreneurs, starting from product design to order fulfilment, all the way through to shipping the goods to the warehouses
          </Typography>
          <Box>
          <Button variant='outlined' endIcon={<ArrowForwardIcon/>} sx={{fontWeight:'700', paddingX:"30px"}} href='https://nitex.com/' target="_blank">See More...</Button>
          </Box>
          {/* Card */}
          <Stack flexDirection={{xs:"col", md:"row"}} gap='24px'>
            <AboutUsCard joiningRole="Join us as an organizer" joiningDescription="Empowering Your Style, Inspiring Confidence" />
            <AboutUsCard joiningRole="Become an investor" joiningDescription="Every Garment Tells a Story of Excellence" />

          </Stack>
        </Stack>
      </Box>
        </Box>
      </Stack>
    </Container>
  )
}

export default AboutUs