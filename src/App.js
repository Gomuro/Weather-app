import { Container, Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Weather from "./components/Weather";
import WeatherBox from "./components/WeatherBox";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);
  const [days, setDays] = useState(new Array(5));
  // get weather through user coordinates
  useEffect(() => {
    const successGotCoords = async (position) => {
      const { latitude, longitude } = position.coords;
      const lat = Math.round(latitude);
      const lon = Math.round(longitude);

      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=6557810176c36fac5f0db536711a6c52`
      );
      const data = await api_call.json();
      updateDays(data);
      setWeather(data);
    };

    if (!city) {
      navigator.geolocation.getCurrentPosition(successGotCoords);
    }
  }, []);
  // creates the day objects and updates the state
  const updateDays = (data) => {
    const days = [];

    const daysIndex = getDayIndex(data);

    for (let i = 0; i < 5; i++) {
      days.push({
        date: data.list[daysIndex[i]].dt_txt,
        weather_desc: data.list[daysIndex[i]].weather[0].description,
        icon: data.list[daysIndex[i]].weather[0].icon,
        temp: data.list[daysIndex[i]].main.temp,
        id: data.list[daysIndex[i]].dt,
      });
    }
    setDays(days);
  };

  const getDayIndex = (data) => {
    let dayIndex = [];
    dayIndex.push(0);

    let index = 0;
    let tmp = data.list[index].dt_txt.slice(8, 10);

    for (let i = 0; i < 4; i++) {
      while (
        tmp === data.list[index].dt_txt.slice(8, 10) ||
        data.list[index].dt_txt.slice(11, 13) !== "15"
      ) {
        index++;
      }
      dayIndex.push(index);
      tmp = data.list[index].dt_txt.slice(8, 10);
    }
    return dayIndex;
  };
  // tries to make an API call with the given city name and triggers state update
  const getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=6557810176c36fac5f0db536711a6c52`
    );
    const data = await api_call.json();

    updateDays(data);
    setWeather(data);
  };

  return (
    <Container className="App">
      <Box className="App-header">
        <h1>Weather App</h1>
        <Form getWeather={getWeather} setCity={setCity} mb={10} />
        <Weather weather={weather} />
        <Box className="weather-box-list">
          {days.slice(1).map((day) => {
            return (
              <>
                <WeatherBox {...day} key={day.id} />
              </>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
}

export default App;
