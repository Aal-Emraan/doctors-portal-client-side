import { BrowserRouter as Router, Switch,  Route} from 'react-router-dom';
import './App.css';
import MakeAppointment from './Pages/Appointment/Appointment/MakeAppointment';
import Appointment from './Pages/Home/AppointmentBanner/Appointment';
import Home from './Pages/Home/Home';
import NavBar from './Pages/Shared/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/appointment">
            <MakeAppointment></MakeAppointment>
          </Route>
          <Route path="/">
          <Home></Home>
          </Route>
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
