import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Home/Service/Service';
import fluoride from '../../images/fluoride.png';
import cavity from '../../images/cavity.png';
import whitening from '../../images/whitening.png';

const Services = () => {

    const services = [
        {
            name: 'Fluoride Treatment',
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error soluta deleniti aliquid nisi nemo nulla maiores alias similique numquam obcaecati.",
            img: fluoride
        },
        {
            name: 'Cavity Filling',
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error soluta deleniti aliquid nisi nemo nulla maiores alias similique numquam obcaecati.",
            img: cavity
        },
        {
            name: 'Teeth Whitening',
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error soluta deleniti aliquid nisi nemo nulla maiores alias similique numquam obcaecati.",
            img: whitening
        },
    ]

    return (
            <Box sx={{ flexGrow: 1, my:5 }}>
            <Container>
                <Typography variant="h5" sx={{fontWeight: '300'}} color="primary.main" component="div">
                    Our Services
                </Typography>
                <Typography variant="h3" color="info.main" sx={{fontWeight: '200'}} component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {services.map((service, index) => (
                        <Service service={service} key={index}></Service>
                    ))}
                </Grid>
            </Container>
            </Box>
    );
};

export default Services;