import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Trips from './pages/Trips';
import Filtered from './pages/filtered';
import City from './pages/city.jsx';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/trips" element = {<Trips/>}/>
          </Routes>
          <Routes>
            <Route path="/trips/filterByBudget/:maxBudget" element = {<Filtered/>}/>
          </Routes>
          <Routes>
            <Route path="/cities/:cityname" element = {<City/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
