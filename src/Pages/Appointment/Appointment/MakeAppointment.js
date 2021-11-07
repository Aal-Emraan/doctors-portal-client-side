import React from 'react';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointments from '../AvailableAppointment/AvailableAppointments';

const MakeAppointment = () => {
    return (
        <div>
            <AppointmentHeader></AppointmentHeader>
            <AvailableAppointments></AvailableAppointments>
        </div>
    );
};

export default MakeAppointment;