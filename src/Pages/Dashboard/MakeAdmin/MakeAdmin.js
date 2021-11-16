import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
	const [email, setEmail] = useState("");
	const { token } = useAuth();

	const handleOnBlur = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = (e) => {
		const user = { email };
		fetch("https://secure-shore-77601.herokuapp.com/users/admin", {
			method: "PUT",
			headers: {
				authorization: `Bearar ${token}`,
				"content-type": "application/json",
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
		e.preventDefault();
	};
	return (
		<div>
			<h2>Make admin</h2>
			<form onSubmit={handleSubmit}>
				<TextField
					onBlur={handleOnBlur}
					label="email"
					variant="standard"
				/>
				<Button type="submit" variant="contained">
					Make Admin
				</Button>
			</form>
		</div>
	);
};

export default MakeAdmin;
