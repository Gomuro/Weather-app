import "./WeatherBox.css";
import React from "react";

const WeatherBox = (props) => {
  const { date, icon, temp } = props;
  const getDay = (date) => {
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[new Date(date).getDay()];
  };
  return (
    <div className="weather-box">
      <h1>{date ? getDay(date) : ""}</h1>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="sun" />
      <span className="temp">{Math.round(temp - 273.15)}°C</span>
    </div>
  );
};

export default WeatherBox;
