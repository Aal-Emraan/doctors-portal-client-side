import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../images/login.png'

const SignUp = () => {
    const [signUpInfo, setSignUpLoginInfo] = useState({});

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...signUpInfo};
        newInfo[field] = value;
        setSignUpLoginInfo(newInfo);
    }

    console.log(signUpInfo);

    const handleSubmit = e => {
        if(signUpInfo.password !== signUpInfo.password2){
            alert('password didnot match');
            e.preventDefault();
            return;
        }
        alert('Account Created Succesfully')
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2} sx={{my:5}}>
                <Grid item xs={12} md={6} sx={{mt:5}}>
                    <Typography variant="h6">Sign Up</Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                        sx={{width: '70%', m:2}}
                        name="displayName"
                        onChange={handleOnChange}
                        label="Name"
                        variant="standard" />
                        <TextField
                        sx={{width: '70%', m:2}}
                        type="email"
                        name="email"
                        onChange={handleOnChange}
                        label="Email"
                        variant="standard" />

                        <TextField
                        sx={{width: '70%', m:2}}
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                        label="Password"
                        variant="standard" />

                        <TextField
                        sx={{width: '70%', m:2}}
                        type="password"
                        name="password2"
                        onChange={handleOnChange}
                        label="Re-enter your password"
                        variant="standard" />

                        <Button
                        sx={{width: '70%', mt:4}}
                        type="submit"
                        variant="contained">
                            Sign Up
                        </Button>

                        <NavLink style={{textDecoration: 'none'}} to="/login">
                            <Button sx={{mt:5}}>Already have account? Please Login</Button>
                        </NavLink>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width: '80%'}} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    )
};

export default SignUp;