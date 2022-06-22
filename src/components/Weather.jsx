import React from "react";
import { Box, Typography } from "@material-ui/core";
import "./Weather.css";

const Weather = (props) => {
  const { weather } = props;
  return (
    <Box className="main">
      {weather.city && (
        <Typography variant="h3">Today in {weather.city.name}</Typography>
      )}

      {weather.list && (
        <Typography variant="h4">
          {Math.round(weather.list[0].main.temp - 273.15)}°C
        </Typography>
      )}
      {weather.list && (
        <img
          src={`http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`}
          alt="weather"
        />
      )}
      {weather.list && (
        <Typography variant="h4">
          {weather.list[0].weather[0].description}
        </Typography>
      )}
    </Box>
  );
};

export default Weather;
