import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useParams} from "react-router-dom";
const Filtered = ()=>{
    const params = useParams();
    const maxBudget = params.maxBudget;
    const [budget,setBudget] = useState(maxBudget);
    const navigate = useNavigate();
    const [city,setcity] = useState('');
    function showDetails(city){
        
        
    }
    const handleChange = (event) => {
      setBudget(event.target.value);
    };
    const handleChange2 = (event) => {
      setcity(event.target.value);
    };
    const refresh = () =>{
      navigate("/trips/filterByBudget/"+budget);
      window.location.reload(true);
    }
    const cityinfo = (n) => {
        // 👇 "message" stores input field value
        navigate("../cities/Paris")
        console.log(n);
      };
    

    const [filteredTrips, setfilteredTrips] = useState([]);

  useEffect(() => {
    const fetchFilteredTrips = async () => {
      try {
        console.log("different");
        const res = await axios.get("http://localhost:8800/trips/filterByBudget/"+maxBudget.toString() );
        console.log(res.status);
        setfilteredTrips(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFilteredTrips();
    console.log(filteredTrips)
  }, []);
  return <div className="trips">
    <h2>maximum budget</h2>
    <input type="number" placeholder="budget" onChange={handleChange}/>
    <button value="search" onClick={refresh}></button>
    <tr><th>country</th><th>city</th><th>Airfare(L.E)</th><th>Dialy Spending(L.E)</th></tr>{filteredTrips.map(trip=>(
        <tr className="triprow"><td className="triprow">{trip.country}</td><td className="triprow">{trip.city}</td><td className="triprow">{trip.airfare}</td><td className="triprow">{trip.dialyspending}</td><td><button value="details" onClick={() => navigate("../cities/"+trip.city)}/></td></tr> 
        
        ))}
    </div>
}
export default Filtered