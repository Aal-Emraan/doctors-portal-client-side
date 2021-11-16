import { Button, Fade, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import TextField from "@mui/material/TextField";
import useAuth from "../../../hooks/useAuth";

const style = {
	background: "white",
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const BookingModal = ({
	open,
	handleClose,
	name,
	time,
	date,
	appoinmentName,
	price,
}) => {
	const { user } = useAuth();
	const initialInfo = {
		name: user.displayName,
		email: user.email,
		phone: "",
		time: time,
	};
	const [bookingInfo, setBookingInfo] = useState({ ...initialInfo });

	const handleOnBlur = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newInfo = { ...bookingInfo };
		newInfo[field] = value;
		setBookingInfo(newInfo);
	};

	const handleSubmit = (e) => {
		const newBookingInfo = {
			...bookingInfo,
			date: date.toLocaleDateString(),
			appoinmentName,
			price,
		};
		// alert('submitting')
		// console.log(bookingInfo);
		fetch("https://secure-shore-77601.herokuapp.com/appointments", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newBookingInfo),
		})
			.then((res) => res.json())
			.then((data) => {
				alert("appointment sumbitted");
				console.log(data);
			});
		handleClose();
		e.preventDefault();
	};
	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			open={open}
			onClose={handleClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={open}>
				<Box sx={style}>
					<Typography
						id="transition-modal-title"
						variant="h6"
						component="h2"
					>
						{name}
					</Typography>
					<form onSubmit={handleSubmit}>
						<TextField
							disabled
							sx={{ width: "90%", m: 1 }}
							id="outlined-size-small"
							defaultValue={time}
							size="small"
						/>
						<TextField
							sx={{ width: "90%", m: 1 }}
							id="outlined-size-small"
							placeholder="your name"
							name="patientName"
							onBlur={handleOnBlur}
							defaultValue={user.displayName}
							size="small"
						/>
						<TextField
							sx={{ width: "90%", m: 1 }}
							id="outlined-size-small"
							type="email"
							name="email"
							onBlur={handleOnBlur}
							defaultValue={user.email}
							placeholder="your email"
							size="small"
						/>
						<TextField
							sx={{ width: "90%", m: 1 }}
							id="outlined-size-small"
							type="number"
							name="phone"
							onBlur={handleOnBlur}
							placeholder="your phone number"
							size="small"
						/>
						<TextField
							disabled
							sx={{ width: "90%", m: 1 }}
							id="outlined-size-small"
							defaultValue={date.toDateString()}
							size="small"
						/>
						<Button type="submit" variant="contained">
							Submit
						</Button>
					</form>
				</Box>
			</Fade>
		</Modal>
	);
};

export default BookingModal;
