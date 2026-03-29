import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './infoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {
    const INIT_URl ="https://images.unsplash.com/photo-1545134969-8debd725b007?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

   let HOT_URL = "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

   let COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

   let RAIN_URL = "https://images.unsplash.com/photo-1438449805896-28a666819a20?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

return(<div className="InfoBox">
    <div className="cardContainer">
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : (info.temp > 15) ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.temp != null ? info.city : "Weather Info"}{
          info.temp != null && ( info.humidity > 80 ? <ThunderstormIcon/> : (info.temp > 15? < SunnyIcon /> : <AcUnitIcon/>))
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          {info.temp == null ? (
  <p>Search for a city to see weather</p>
) : (
  <>
    <p>Temperature: {info.temp}°C</p>
    <p>Min-Temperature: {info.temp_min}°C</p>
    <p>Max-Temperature: {info.temp_max}°C</p>
    <p>Humidity: {info.humidity}%</p>
  </>
)}
           {info.weather && (
  <p>The weather can be described as <i>{info.weather}</i> and Feels like: {info.feelsLike}&deg;</p>
)}
                </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
    );
};