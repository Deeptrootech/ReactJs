import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TransitionAlerts from "../../services/TransitionAlerts";
import "./register.css";
import axiosapi from "../../interceptor/axios";
import { baseURL } from "../../services/user.services";
import axios from "axios";

import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const [city, setCity] = React.useState("");
  const [birthdate, setBirthdate] = React.useState(null);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePost = (event) => {
    event.preventDefault();
    const user_data = {
      email: event.target.email.value,
      password: event.target.password.value,
      confirm_password: event.target.confirm_password.value,
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      mobile: event.target.mobile.value,
      date_of_birth: event.target.date_of_birth.value,
      city: event.target.city.value,
      postal_code: event.target.postal_code.value,
      is_terms_accepted: event.target.is_terms_accepted.value,
    };
    axiosapi
      .post(`${baseURL}register/`, user_data)
      .then(function (response) {
        console.log(response);
        event.target.reset();
        navigate("/login");
      })
      .catch(function (error) {
        setError(error);
      });
  };

  return (
    <div className='container'>
      {error ? (
        <TransitionAlerts message={error.response.message} type='error' />
      ) : null}
      <form onSubmit={handlePost}>
        <h1>Register Here</h1>
        <TextField
          sx={{ m: 1 }}
          required
          fullWidth
          label='FirstName'
          name='first_name'
          variant='standard'
          margin='normal'
        />
        <TextField
          sx={{ m: 1 }}
          required
          fullWidth
          label='LastName'
          name='last_name'
          variant='standard'
          margin='normal'
        />
        {/* Email */}
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              fullWidth
              required
              id='input-with-sx'
              label='Email'
              variant='standard'
            />
          </Box>
        </Box>
        {/* password */}
        <FormControl fullWidth sx={{ m: 1 }} variant='standard'>
          <InputLabel required htmlFor='standard-adornment-password'>
            Password
          </InputLabel>
          <Input
            id='password1'
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {/* confirm password */}
        <FormControl fullWidth sx={{ m: 1 }} variant='standard'>
          <InputLabel required htmlFor='password2'>
            Confirm Password
          </InputLabel>
          <Input
            id='standard-adornment-password'
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {/* Date of Birth  */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            sx={{ marginX: 1, marginTop: 2 }}
            label='Date Of Birth'
            value={birthdate}
            onChange={(newValue) => setBirthdate(newValue)}
          />
        </LocalizationProvider>
        {/* Select city */}
        <FormControl fullWidth variant='standard' sx={{ m: 1, minWidth: 120 }}>
          <InputLabel required id='demo-simple-select-standard-label'>
            City
          </InputLabel>
          <Select
            labelId='demo-simple-select-standard-label'
            id='demo-simple-select-standard'
            value={city}
            onChange={handleCityChange}
            label='City'>
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        {/* postal code  */}
        <TextField
          sx={{ m: 1 }}
          required
          fullWidth
          label='PostalCode'
          name='postal_code'
          variant='standard'
          margin='normal'
        />
        {/* is_terms_accepted */}
        <FormControlLabel
          required
          control={<Checkbox />}
          label='I accept the terms and conditions and privacy policy'
          name='is_terms_accepted'
        />
        {/* Register Button  */}
        <Box sx={{ textAlign: "center", marginBottom: "5%" }}>
          <Button
            color='success'
            variant='contained'
            type='submit'
            size='large'>
            LogIn
          </Button>
        </Box>
      </form>
    </div>
  );
}
