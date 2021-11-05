import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const Appointment = () => {
    const appointmentBg = {
        background: `url(${bg})`,
        backgroundColor: 'rgba(45,58,74)',
        marginTop: 100,
        backgroundBlendMode: 'overlay'
    }
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <img src={doctor} alt="" style={{width: '100%',marginTop: '-130px'}}/>
                </Grid>
                <Grid item xs={12} md={7} style={{color: 'white', marginTop: 100, textAlign: 'start'}}>
                    <Typography variant="h6" color="info.main">
                        Appointment
                    </Typography>
                    <Typography variant="h3" style={{margin: '30px 0'}}>
                        Make An Appointment Today
                    </Typography>
                    <Typography variant="h6" style={{margin:"20px 0"}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque obcaecati ipsam cum, necessitatibus corporis repudiandae molestiae sunt iure facere ipsa.
                    </Typography>
                    <Button variant="contained">Learn More</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Appointment;