import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
	"pk_test_51Jw3LOBm7cLPALou4GtCFish5Xfg66AuqKzBB9plkZWE4nhHuecMZeU2YjJ27ovd1TlI4LKTtUNAuLeZ5Cs11nHk00mBcz6f6m"
);

const Pay = () => {
	const { id } = useParams();
	const [appointment, setAppointment] = useState({});

	useEffect(() => {
		fetch(`http://localhost:5000/appointment/${id}`)
			.then((res) => res.json())
			.then((data) => setAppointment(data));
	}, [id]);
	console.log(appointment);
	return (
		<div>
			<h2>Pay your bill for {appointment?.price}</h2>
			{appointment.price && (
				<Elements stripe={stripePromise}>
					<CheckoutForm appointment={appointment} />
				</Elements>
			)}
		</div>
	);
};

export default Pay;
