import { Box, Container, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import CountUp from 'react-countup';

const OverallStatistics = () => {
  return (
    <Box sx={{maxWidth:"1240px", margin:'auto',marginBottom:"76px", paddingTop:"40px", paddingX:{xs:"15px",md:"0"}}}>

<Stack
    alignItems="center"
    justifyContent="space-between"
    gap={{ xs: '20px', md: '0' }}
    direction={{ xs: 'column', md: 'row' }}
    sx={{
      backgroundColor: '#30992e',
      color: '#FFF',
      borderRadius: 2,
      py: { xs: '30px', md: '60px' },
      px: { xs: '60px', md: '120px' }
    }}
  >
    {/* {renderImg}

    {renderDescription} */}
    <Box sx={{textAlign:{xs:"center", md:"left"}}}>
      <Typography variant='h2' sx={{fontSize:{xs:"45px", md:"60px"}}}> <CountUp end={23577} /></Typography>
      <Typography variant='h4' sx={{fontSize:{xs:"25px", md:"34px"}}}>Total Investor</Typography>

    </Box>
    <Box>
      <Typography variant='h2' sx={{fontSize:{xs:"45px", md:"60px"}}}><CountUp end={986}/>k </Typography>
      <Typography variant='h4' sx={{fontSize:{xs:"25px", md:"34px"}}}>Profits</Typography>
    </Box>
    <Box>
      <Typography variant='h2' sx={{fontSize:{xs:"45px", md:"60px"}}}><CountUp end={762}/></Typography>
      <Typography variant='h4' sx={{fontSize:{xs:"25px", md:"34px"}}}>Campaigns</Typography>
    </Box>
    <Box>
      <Typography variant='h2' sx={{fontSize:{xs:"45px", md:"60px"}}}><CountUp end={10}/>%</Typography>
      <Typography variant='h4' sx={{fontSize:{xs:"25px", md:"34px"}}}>Platform Fee</Typography>
    </Box>
  </Stack>
    </Box>
  )
}

export default OverallStatistics