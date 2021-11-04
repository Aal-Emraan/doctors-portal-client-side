import { Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const Info = () => {
    return (
        <Container sx={{mt:-10}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Box style={{background: '#1CC7C1',borderRadius: '5px', color: 'white', display: 'flex', alignItems: 'center'}}>
                        <AccessTimeIcon sx={{fontSize:70,m:3}}/>
                        <Box sx={{textAlign: 'start',pr:10}}>
                            <Typography variant="h6">Opening hours</Typography>
                            <Typography variant="h6" sx={{fontWeight:'200', fontSize: 14}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box style={{background: '#3A4256',borderRadius: '5px', color: 'white', display: 'flex', alignItems: 'center'}}>
                        <LocationOnIcon sx={{fontSize:70,m:3}}/>
                        <Box sx={{textAlign: 'start',pr:10}}>
                            <Typography variant="h6">Visit Our Location</Typography>
                            <Typography variant="h6" sx={{fontWeight:'200', fontSize: 14}}>Sylhet, Bangladesh.</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box style={{background: '#1CC7C1',borderRadius: '5px', color: 'white', display: 'flex', alignItems: 'center'}}>
                        <PhoneInTalkIcon sx={{fontSize:70,m:3}}/>
                        <Box sx={{textAlign: 'start',pr:10}}>
                            <Typography variant="h6">Contact us now</Typography>
                            <Typography variant="h6" sx={{fontWeight:'200', fontSize: 14}}>+01234567890</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Info;