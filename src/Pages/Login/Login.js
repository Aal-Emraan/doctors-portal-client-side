import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import loginphoto from '../../images/login.png'

const Login = () => {

    const [loginInfo, setLoginInfo] = useState({});
    const {login, signInWithGoogle} = useAuth();
    const history = useHistory();
    const location = useLocation();

    const redirect_uri = location?.state?.from || '/';

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...loginInfo};
        newInfo[field] = value;
        setLoginInfo(newInfo);
    }

    const handleSubmit = e => {
        login(loginInfo.email, loginInfo.password);
        history.replace(redirect_uri);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2} sx={{my:5}}>
                <Grid item xs={12} md={6} sx={{mt:15}}>
                    <Typography variant="h6">Login</Typography>
                    <form onSubmit={handleSubmit}>
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

                        <Button
                        sx={{width: '70%', mt:4}}
                        type="submit"
                        variant="contained">
                            Login
                        </Button>

                        <NavLink style={{textDecoration: 'none'}} to="/signup">
                            <Button>New user? Please sign up</Button>
                        </NavLink>
                    </form>
                    <Button onClick={() => signInWithGoogle(location, history)} variant="contained">Google Sign In</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width: '70%'}} src={loginphoto} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;