import React from 'react';
import Services from '../Services/Services';
import Appointment from './AppointmentBanner/Appointment';
import Info from './Info/Info';
import LandingPage from './LandingPage/LandingPage';

const Home = () => {
    return (
        <div>
            <LandingPage></LandingPage>
            <Info></Info>
            <Services></Services>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;