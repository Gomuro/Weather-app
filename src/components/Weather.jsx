import React from "react";
import { Box, Typography } from "@material-ui/core";
import "./Weather.css";

const Weather = (props) => {
  const { weather } = props;
  return (
    <Box className="main">
      {weather.name && (
        <Typography variant="h2" fontSize={"bold"}>
          {weather.name}
        </Typography>
      )}

      {weather.main && (
        <Typography variant="h4">
          {Math.round(weather.main.temp - 273.15)}°C
        </Typography>
      )}
      {weather.weather && (
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="weather"
        />
      )}
      {weather.main && (
        <Typography variant="h4">{weather.weather[0].description}</Typography>
      )}
    </Box>
  );
};

export default Weather;
