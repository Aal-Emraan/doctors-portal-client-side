import { Grid } from "@mui/material";
import React from "react";

const Doctor = ({ doctor }) => {
	const { name, image } = doctor;
	return (
		<Grid item xs={12} md={4}>
			<h2>this is {name}</h2>
			<img
				style={{ width: "100%" }}
				src={`data:image/jpeg;base64,${image}`}
				alt=""
			/>
		</Grid>
	);
};

export default Doctor;
