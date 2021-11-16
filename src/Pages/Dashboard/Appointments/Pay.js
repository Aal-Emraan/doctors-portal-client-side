import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Pay = () => {
    const {id} = useParams();
    const [appointment, setAppointment] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/appointment/${id}`)
        .then(res => res.json())
        .then(data => setAppointment(data))
    },[id])
    console.log(appointment);
    return (
        <div>
            <h2>Pay your bill for {appointment?.price}</h2>
        </div>
    );
};

export default Pay;