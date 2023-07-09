import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import {useParams} from "react-router-dom";


const City = () => {

    const api_key = "3811367ec440451eec34595bc5c2490a";
    const params = useParams();
    
    const city = params.cityname;
    
    // const re = "http://api.openweathermap.org/geo/1.0/direct?q="+city+"&appid="+api_key;
   
    // const fetchGeoData = async () => {
    //   try {
    //     const res = await axios.get(re);
    //     var dat = res.data;
    //     return dat
    //   } catch (err) {
    //     console.log(err);
    //   }
    //   return "hi"
    // };
    // fetchGeoData().then((value) => {
    //   console.log(value.lon);
    // });    
    
    

    // const lon = Geodata[0].lon;
    // const lat = Geodata[0].lat;
    //const x = "https://api.openweathermap.org/data/2.5/weather?lat=48.8588897"+"&lon=2.3200410217200766"+"&appid="+ api_key
    //const [Weatherdata, getWeatherdata] = useState([]);
    // useEffect(() => {
    //     const fetchWeatherData = async () => {
    //       try {
    //         const res = await axios.get(x);
    //         fetchWeatherData(res.data);
    //       } catch (err) {
    //         console.log(err);
    //       }
    //     };
    //     fetchWeatherData();
    // },[]);
   // const weather = Weatherdata.weather[0].description;
   const getTripInfo = async() => {
    try{

      const res = await axios.get("http://localhost:8800/trips/cities/" + city);
      if(res.status = '200'){
        return res
      }
      
    }catch(err){
      console.log(err)
    }
 }
   const getMeal = async() => {
      try{
        const que = "https://www.themealdb.com/api/json/v1/1/filter.php?a="+country;
        const res = await axios.get(que);
        return res
      }catch(err){
        console.log(err)
      }
   }
   
   const getWeather = async(lat,lon) => {
    try{
      const res = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=3811367ec440451eec34595bc5c2490a");
      return res
    }catch(err){
      console.log(err);
    }
   }
   var me = "h";
   const [themeal, getthemeal] = useState("no meals present");
   const [themealpic, getthemealpic] = useState("");
   const [weather, getweather] = useState("");
   const [weatherIcon, getweatherIcon] = useState("");
   const [country, getcountry] = useState("");
   getTripInfo().then((value) => {
    if(value == null){
      return null;
    }
    const lon = value.data[0].lon;
    const lat = value.data[0].lat;
    getcountry(value.data[0].country);
    getWeather(lon,lat).then((value) => {
      getweather(value.data.weather[0].description);
      getweatherIcon("http://openweathermap.org/img/w/"+value.data.weather[0].icon+".png");
    }) 
   });
   getMeal().then((value)=>{
    if(value.data.meals == null){
      
    }else{
      
    const meal = value.data.meals[0].strMeal;
    const mealpic = value.data.meals[0].strMealThumb;
    
    //console.log(meal);
    getthemeal(meal);
    getthemealpic(mealpic);
    }
    
   });

   
   

   return <div>
            <h2>weather: {weather}</h2>
            <img src={weatherIcon} alt="Weather icon"></img>
            <h2>famous meal:{themeal} </h2>
            <img src={themealpic} alt="Meal picture"></img>
         </div>
    
}
export default City