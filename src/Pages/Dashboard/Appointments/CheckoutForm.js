import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const CheckoutForm = ({ appointment }) => {
	const stripe = useStripe();
	const elements = useElements();
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [processing, setProcessing] = useState(false);

	const [cilentSecretInfo, setClientSecretInfo] = useState("");

	useEffect(() => {
		fetch("http://localhost:5000/create-payment-intent", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ price: appointment.price }),
		})
			.then((res) => res.json())
			.then((data) => setClientSecretInfo(data.clientSecret));
	}, [appointment.price]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);
		if (card === null) {
			return;
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card,
		});

		if (error) {
			console.log(error);
			setSuccess("");
			setError(error.message);
		} else {
			setError("");
			// console.log(paymentMethod);
		}

		// payment intent

		setProcessing(true);

		const { paymentIntent, error: intentError } =
			await stripe.confirmCardPayment(cilentSecretInfo, {
				payment_method: {
					card: card,
					billing_details: {
						name: appointment.name,
					},
				},
			});

		if (intentError) {
			setError(intentError.message);
			setSuccess("");
		} else {
			setError("");
			setSuccess("Your payment was done successfully!");
			// console.log(paymentIntent);
			setProcessing(false);

			const payment = {
				amount: paymentIntent.amount,
				created: paymentIntent.created,
				transectionId: paymentIntent.client_secret.split("_secret")[0],
				last4: paymentMethod.card.last4,
			};

			const uri = `http://localhost:5000/appointment/${appointment._id}`;
			fetch(uri, {
				method: "PUT",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(payment),
			})
				.then((res) => res.json())
				.then((data) => console.log(data));
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<CardElement
				options={{
					style: {
						base: {
							fontSize: "16px",
							color: "#424770",
							"::placeholder": {
								color: "#aab7c4",
							},
						},
						invalid: {
							color: "#9e2146",
						},
					},
				}}
			/>
			{processing ? (
				<CircularProgress color="secondary" />
			) : (
				<button type="submit" disabled={!stripe || success}>
					Pay ${appointment.price}
				</button>
			)}
			{error && <p style={{ color: "red" }}>{error}</p>}
			{success && <p style={{ color: "green" }}>{success}</p>}
		</form>
	);
};

export default CheckoutForm;
