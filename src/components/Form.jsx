import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Input,
  Button,
  FormHelperText,
} from "@material-ui/core";

const Form = (props) => {
  const { getWeather, setCity } = props;
  return (
    <Box>
      <form onSubmit={getWeather}>
        <FormControl>
          <InputLabel htmlFor="city">City</InputLabel>
          <Input id="city" onChange={(e) => setCity(e.target.value)} />
          <FormHelperText>Enter a city name</FormHelperText>
        </FormControl>
        <Button type="submit">Get Weather</Button>
      </form>
    </Box>
  );
};

export default Form;
