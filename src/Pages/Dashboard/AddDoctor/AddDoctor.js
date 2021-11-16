import { Button, Input, TextField } from "@mui/material";
import React, { useState } from "react";

const AddDoctor = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [image, setImage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("name", name);
		formData.append("email", email);
		formData.append("image", image);

		fetch("http://localhost:5000/adddoctor", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.json())
			.then((result) => {
				if (result.insertedId) {
					alert("doctor added succesfully.");
				}
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	return (
		<div>
			<h2>Add a Doctor</h2>
			<form onSubmit={handleSubmit}>
				<TextField
					sx={{ width: "50%" }}
					label="Name"
					onChange={(e) => setName(e.target.value)}
					required
					variant="standard"
				/>
				<br />
				<TextField
					sx={{ width: "50%" }}
					label="Email"
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					required
					variant="standard"
				/>
				<br />
				<br />
				<Input
					sx={{ width: "50%" }}
					accept="image/*"
					type="file"
					onChange={(e) => setImage(e.target.files[0])}
				/>
				<br />
				<br />
				<Button sx={{ width: "50%" }} variant="contained" type="submit">
					Add Doctor
				</Button>
			</form>
		</div>
	);
};

export default AddDoctor;
