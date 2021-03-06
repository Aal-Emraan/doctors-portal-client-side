import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import MakeAppointment from "./Pages/Appointment/Appointment/MakeAppointment";
import Pay from "./Pages/Dashboard/Appointments/Pay";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import NavBar from "./Pages/Shared/NavBar/NavBar";

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<Router>
					<NavBar></NavBar>
					<Switch>
						<Route exact path="/">
							<Home></Home>
						</Route>
						<PrivateRoute path="/appointment">
							<MakeAppointment></MakeAppointment>
						</PrivateRoute>
						<Route path="/dashboard">
							<Dashboard></Dashboard>
						</Route>
						<Route path="/login">
							<Login></Login>
						</Route>
						<Route path="/signup">
							<SignUp></SignUp>
						</Route>
						<Route path="/pay/:id">
							<Pay></Pay>
						</Route>
					</Switch>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;

// live site link: https://doctors-portal-16bb7.web.app
