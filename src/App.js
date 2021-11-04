import { BrowserRouter as Router, Routes,  Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import NavBar from './Pages/Shared/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Home></Home>
      </Router>
    </div>
  );
}

export default App;
