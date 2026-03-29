import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"
import {useState } from "react"

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city: "Delhi",
        temp: null,
        temp_min: null,
        temp_max: null,   
        humidity: null,
        feelsLike: null,
        pressure: null,
        weather: "",      
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return <div style={{textAlign:"center"}}><h2>Live Weather Dashboard </h2>
    <SearchBox updateInfo ={updateInfo} />
    <InfoBox info={weatherInfo}/>
    </div>

}