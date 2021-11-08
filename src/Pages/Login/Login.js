import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import login from '../../images/login.png'

const Login = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2} sx={{my:5}}>
                <Grid item xs={12} md={6} sx={{mt:15}}>
                    <Typography variant="h6">Login</Typography>
                    <form onSubmit={handleSubmit}>
                    <TextField sx={{width: '70%', m:2}} type="email" label="Email" variant="standard" />
                    <TextField sx={{width: '70%', m:2}} type="password" label="Password" variant="standard" />
                    <Button sx={{width: '70%', mt:4}} type="submit" variant="contained">Login</Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width: '90%'}} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;