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

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export default function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const [city, setCity] = React.useState("");
  const [birthdate, setBirthdate] = React.useState(null);
  const [phone, setPhoneValue] = useState();
  const [nonfielderror, setNonFieldErrors] = useState(null);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePost = (event) => {
    event.preventDefault();
    const user_birthdate = `${birthdate["$d"].getFullYear()}-${
      (birthdate["$d"].getMonth() % 12) + 1
    }-${birthdate["$d"].getDate()}`;
    const user_data = {
      email: event.target.email.value,
      password: event.target.password.value,
      confirm_password: event.target.confirm_password.value,
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      mobile: phone,
      date_of_birth: user_birthdate,
      city: event.target.city.value,
      postal_code: event.target.postal_code.value,
      is_terms_accepted:
        event.target.is_terms_accepted.value === "on" ? true : false,
    };

    axiosapi
      .post(`${baseURL}register/`, user_data)
      .then(function (response) {
        console.log(response);
        event.target.reset();
        navigate("/login");
      })
      .catch(function (error) {
        setNonFieldErrors(error.response.data["non_field_errors"].toString());
      });
  };

  return (
    <div className='container'>
      {nonfielderror && <TransitionAlerts message={nonfielderror} type='error' />
        }
      <form onSubmit={handlePost}>
        <h1>Register Here</h1>
        {/* First name  */}
        <TextField
          sx={{ m: 1 }}
          required
          fullWidth
          label='FirstName'
          name='first_name'
          variant='standard'
          margin='normal'
        />
        {/* last name  */}
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
              name='email'
              variant='standard'
            />
          </Box>
          <p>
            {error ? (
              <span style={{ fontSize: "small", color: "red" }}>
                {error.response.data["email"][0]}
              </span>
            ) : (
              <span></span>
            )}
          </p>
        </Box>
        {/* password */}
        <FormControl fullWidth sx={{ m: 1 }} variant='standard'>
          <InputLabel required htmlFor='standard-adornment-password'>
            Password
          </InputLabel>
          <Input
            id='password1'
            name='password'
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
            name='confirm_password'
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
        {/* phone number */}
        <FormControl
          fullWidth
          sx={{ marginX: 1, marginTop: 2 }}
          variant='standard'>
          <PhoneInput
            sx={{ marginX: 1, marginTop: 2 }}
            defaultCountry='IN'
            placeholder='PhoneNumber'
            value={phone}
            name='mobile'
            onChange={setPhoneValue}
          />
        </FormControl>
        {/* Date of Birth  */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            sx={{ marginX: 1, marginTop: 3 }}
            label='Date Of Birth'
            value={birthdate}
            name='date_of_birth'
            dateFromat='yyyy-MM-dd'
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
            name='city'
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
          sx={{ marginX: 1, marginTop: 2, color: "#666666", width: "100%" }}
          required
          control={<Checkbox />}
          label='I accept the terms and conditions and privacy policy'
          name='is_terms_accepted'
        />
        {/* Register Button  */}
        <Box sx={{ textAlign: "center", marginY: "5%" }}>
          <Button
            color='success'
            variant='contained'
            type='submit'
            size='large'>
            Register
          </Button>
        </Box>
      </form>
    </div>
  );
}
