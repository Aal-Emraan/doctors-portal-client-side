import React from 'react';
import Services from '../Services/Services';
import Appointment from './AppointmentBanner/Appointment';
import LandingPage from './LandingPage/LandingPage';

const Home = () => {
    return (
        <div>
            <LandingPage></LandingPage>
            <Services></Services>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;