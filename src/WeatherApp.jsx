import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from "react";

export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]=useState({
      city:"Ranchi",
feelsLike: 29.71,
humidity: 74,
temp: 27.27,
tempMax: 27.27,
tempMin: 27.27,
weather:"scattered clouds",
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div STYLE={{textAlign: "center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}