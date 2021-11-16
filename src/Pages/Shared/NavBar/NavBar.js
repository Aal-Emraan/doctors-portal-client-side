import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const NavBar = () => {
	const { user, logout } = useAuth();
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						Doctors Portal
					</Typography>
					<Link
						style={{
							textDecoration: "none",
							color: "white",
							margin: "0 10px",
						}}
						to="/"
					>
						Home
					</Link>
					<Link
						style={{
							textDecoration: "none",
							color: "white",
							margin: "0 10px",
						}}
						to="/appointment"
					>
						Make Appointment
					</Link>
					{user?.email ? (
						<>
							<Link
								style={{
									textDecoration: "none",
									color: "white",
									margin: "0 10px",
								}}
								to="/dashboard"
							>
								Dashboard
							</Link>
							<Typography
								style={{
									background: "#3A4256",
									padding: "5px",
									borderRadius: "10px",
								}}
							>
								{user.displayName}
							</Typography>
							<Button onClick={logout} color="inherit">
								Logout
							</Button>
						</>
					) : (
						<Link to="/login">
							<Button color="inherit">Login</Button>
						</Link>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default NavBar;
