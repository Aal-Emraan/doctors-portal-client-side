import React from 'react';
import Box from '@mui/material/Box';
import bg from'../../../images/bg.png';
import chair from'../../../images/chair.png';
import { Button, Grid, Typography } from '@mui/material';

const LandingPage = () => {
    return (
        <Box style={{
            background: `url(${bg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '100vh'
        }}>
            <Grid container >
                <Grid item xs={12} md={6} sx={{display: 'flex', alignItems: 'center',textAlign: 'start',px:15}}>
                    <Box>
                        <Typography variant="h3" sx={{fontWeight:500,mb:5}}>
                            Your New Smile
                            Starts Here
                        </Typography>
                        <Typography variant="h6" style={{fontWeight:'400',fontSize: 16, color: 'gray',marginBottom: '30px'}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vel beatae incidunt optio, voluptatibus adipisci nisi ratione repudiandae sequi officia!
                        </Typography>
                        <Button variant="contained">Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={{
                    background: 'linear-gradient(to right,#0000 200px,#3A4256 10px)',
                    height: '100vh',
                    textAlign: 'start',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <img src={chair} style={{
                        width: "80%",
                        // margin: '175px 0 130px -70px'
                    }} alt="" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default LandingPage;