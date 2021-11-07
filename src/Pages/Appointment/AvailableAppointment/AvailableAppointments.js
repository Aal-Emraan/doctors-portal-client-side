import React from 'react';

const AvailableAppointments = ({date}) => {
    return (
        <div>
            <h2>available appointments {date.toDateString()}</h2>
        </div>
    );
};

export default AvailableAppointments;