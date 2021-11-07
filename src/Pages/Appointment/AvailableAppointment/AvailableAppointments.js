import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const data = [
    {
        id: 1,
        name: 'Oral Sergery',
        time: '10:00 AM - 12:00 PM',
        space: 10
    },
    {
        id: 2,
        name: 'Oral Sergery',
        time: '10:00 AM - 12:00 PM',
        space: 10
    },
    {
        id: 3,
        name: 'Oral Sergery',
        time: '10:00 AM - 12:00 PM',
        space: 10
    },
    {
        id: 4,
        name: 'Oral Sergery',
        time: '10:00 AM - 12:00 PM',
        space: 10
    },
    {
        id: 5,
        name: 'Oral Sergery',
        time: '10:00 AM - 12:00 PM',
        space: 10
    },
    {
        id: 6,
        name: 'Oral Sergery',
        time: '10:00 AM - 12:00 PM',
        space: 10
    }
]

const AvailableAppointments = ({date}) => {
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'primary.main' }}>Available Appointments {date.toDateString()}</Typography>
            <Grid container spacing={2} sx={{py:5}}>
                {data.map(item => <Booking booking={item} key={data.id}></Booking>)}
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;