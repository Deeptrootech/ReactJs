import { Box, Button, TextField } from "@mui/material";
import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../services/user.services";

function Login() {
  const handlePost = (event) => {
    event.preventDefault();
    const user_credentials = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    axios
      .post(`${baseURL}login/`, user_credentials)
      .then(function (response) {
        console.log(response);
        // Initialize the access & refresh token in localstorage.
        localStorage.clear();
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data["access"]}`;
        window.location.href = "/";
        event.target.reset();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className='container'>
      <form onSubmit={handlePost}>
        <h1>Login Here</h1>
        <TextField
          required
          fullWidth
          label='Email'
          name='email'
          variant='outlined'
          margin='normal'
        />
        <TextField
          required
          fullWidth
          label='Password'
          name='password'
          variant='outlined'
          margin='normal'
        />
        <Box sx={{ marginBottom: "10%" }}>
          <Link to='/forgotpassword'>Forgot your password?</Link>
        </Box>
        <Box sx={{ textAlign: "center", marginBottom: "5%" }}>
          <Button
            color='success'
            variant='contained'
            type='submit'
            size='large'>
            LogIn
          </Button>
        </Box>
        <Box sx={{ textAlign: "center", marginBottom: "3%" }}>
          Don't have an account?
        </Box>
        <Box sx={{ textAlign: "center", marginBottom: "3%" }}>
          <div>
            <Link to='/register'>register here</Link>
          </div>
        </Box>
      </form>
    </div>
  );
}

export default Login;
