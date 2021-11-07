import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const data = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08:00 AM - 10:00 AM',
        space: 8
    },
    {
        id: 2,
        name: 'Cosmetics Dentisty',
        time: '10:00 AM - 12:00 PM',
        space: 3
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '04:00 PM - 07:00 PM',
        space: 8
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '10:00 AM - 12:00 PM',
        space: 10
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '05:00 AM - 08:00 PM',
        space: 5
    },
    {
        id: 6,
        name: 'Oral Sergery',
        time: '10:00 AM - 12:00 PM',
        space: 12
    }
]

const AvailableAppointments = ({date}) => {
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'primary.main' }}>Available Appointments {date.toDateString()}</Typography>
            <Grid container spacing={2} sx={{py:5}}>
                {data.map(item => <Booking booking={item} key={data.id} date={date}></Booking>)}
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;