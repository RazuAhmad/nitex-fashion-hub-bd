import { Box, Paper, Stack, Typography } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import React from 'react'

const AboutUsCard =({ joiningRole, joiningDescription })=> {
    return (
        <Paper sx={{ padding: '20px', flex: '1', backgroundColor:"#92bd2c" }} elevation={5} >
            <Stack flexDirection='row' gap='12px'>
                <PersonOutlineOutlinedIcon sx={{ backgroundColor: '#F9FAFB', borderRadius: '22px' }} />
                <Box>
                    <Typography variant='subtitle1' sx={{ marginBottom: '8px', fontWeight:"700" }}>
                        {joiningRole}
                    </Typography>
                    <Typography variant='subtitle1'>
                        {joiningDescription}
                    </Typography>
                </Box>
            </Stack>
        </Paper>
    )
}
export default AboutUsCard