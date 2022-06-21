import { Container, Box } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Weather from "./components/Weather";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);

  const getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=4f7afecb14fc0c84a88ef1e011db6bdb`
    );
    const data = await api_call.json();
    setWeather(data);
    console.log(data);
  };
  return (
    <Container className="App" fullWidth>
      <Box className="App-header">
        <h1>Weather App</h1>
        <Form getWeather={getWeather} setCity={setCity} mb={10} />
        <Weather weather={weather} />
      </Box>
    </Container>
  );
}

export default App;
