import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } 
from "react-router-dom";

const Trips = () => {
    const navigate = useNavigate();
    const [budget, setBudget] = useState('');  
    const [city, setcity] = useState('');
    const handleChange = (event) => {
      setBudget(event.target.value);
    };
    const handleChange2 = (event) => {
      setcity(event.target.value);
    };
  
    const handleClick = () => {
      // 👇 "message" stores input field value
      navigate("./filterByBudget/"+budget);
    };
    const handleClick2 = () => {
      // 👇 "message" stores input field value
      navigate("../cities/"+city);
    };
  
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchAllTrips = async () => {
      try {
        const res = await axios.get("http://localhost:8800/trips");
        setTrips(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllTrips();
  }, []);
  console.log(trips)

  return <div className="trips">
    <tr><td><h2>City</h2>
    <input type="string" placeholder="city" onChange={handleChange2}/>
    <button value="search" onClick={handleClick2}></button>
    </td>
    <td>
    <h2>Budget</h2>
    <input type="number" placeholder="budget" onChange={handleChange}/>
    <button value="search" onClick={handleClick}></button> </td></tr>
   
    <tr><th>country</th><th>city</th><th>Airfare(L.E)</th><th>Dialy Spending(L.E)</th></tr>{trips.map(trip=>(
    <tr className="triprow"><td className="triprow">{trip.country}</td><td className="triprow">{trip.city}</td><td className="triprow">{trip.airfare}</td><td className="triprow">{trip.dialyspending}</td><td className="triprow">{trip.dialyspending}</td><td></td></tr>
))}
</div>
 
}
export default Trips