import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';


export default function SearchBox({updateInfo}) {
        let[city, setCity] = useState("");
        let[error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_API_KEY;
    console.log("API_KEY:", API_KEY);

    let getWeather = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let data = await response.json();
     try{
           
        let result = {
            city: city,
            temp: data.main.temp,
            temp_min: data.main.temp_min,
            temp_max: data.main.temp_max,
            humidity: data.main.humidity,
            feelsLike: data.main.feels_like,
            pressure: data.main.pressure,
            weather: data.weather[0].description,      
    };
    console.log(result);
    return result;
     }catch(err){
        throw err;
     }
    };
    
    let handlechange = (e) => {
        setCity(e.target.value);
    };
    let handlesubmit = async (e) => {
        try{
            e.preventDefault();
        setCity("");
        let newInfo = await getWeather(city);
        updateInfo(newInfo);
        }
        catch(err){
            setError(true);
        }
    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handlesubmit}>
                      <TextField id="City" label="City-Name" variant="outlined" required value={city} onChange={handlechange}/>
                      <br />
                      <div className="search-box">
                      <Button variant="contained" type="submit">Search</Button>
                      </div>
                      {error && <p style={{color:"red"}}>City not found. Please try again.</p>}
            </form>
        </div>
    )
}