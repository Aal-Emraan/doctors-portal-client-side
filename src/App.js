import { BrowserRouter as Router, Switch,  Route} from 'react-router-dom';
import './App.css';
import { AuthContext } from './contexts/AuthProvider/AuthProvider';
import MakeAppointment from './Pages/Appointment/Appointment/MakeAppointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import NavBar from './Pages/Shared/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <AuthContext>
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
            <Home></Home>
            </Route>
            <Route path="/appointment">
              <MakeAppointment></MakeAppointment>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
          </Switch> 
        </Router>
      </AuthContext>
    </div>
  );
}

export default App;
