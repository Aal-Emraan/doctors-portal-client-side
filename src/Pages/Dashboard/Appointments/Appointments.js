import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const Appointments = ({ date }) => {
	const { user } = useAuth();
	const [appointments, setAppointments] = useState([]);

	useEffect(() => {
		fetch(
			`http://localhost:5000/appointments?email=${
				user.email
			}&date=${date.toLocaleDateString()}`
		)
			.then((res) => res.json())
			.then((data) => setAppointments(data));
	}, [user.email, date]);
	return (
		<Box>
			<Typography variant="h5">All Appointments</Typography>
			<TableContainer component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell align="right">
								Appointment Name
							</TableCell>
							<TableCell align="right">Scadule</TableCell>
							<TableCell align="right">Date</TableCell>
							<TableCell align="right">Cost</TableCell>
							<TableCell align="right">Paying Status</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{appointments.map((row) => (
							<TableRow
								key={row._id}
								sx={{
									"&:last-child td, &:last-child th": {
										border: 0,
									},
								}}
							>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell align="right">
									{row.appoinmentName}
								</TableCell>
								<TableCell align="right">{row.time}</TableCell>
								<TableCell align="right">{row.date}</TableCell>
								<TableCell align="right">{row.price}</TableCell>

								{!row.payment ? (
									<TableCell align="right">
										<Link to={`/pay/${row._id}`}>
											<button>Pay</button>
										</Link>
									</TableCell>
								) : (
									<TableCell align="right">
										<p>Paid</p>
									</TableCell>
								)}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default Appointments;
