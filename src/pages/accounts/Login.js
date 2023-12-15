import { Box, Button, TextField } from "@mui/material";
import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {

  const handlePost = (event) =>{
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    event.preventDefault();
  }

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
          <Button color='success' variant='contained' type='submit' size="large">
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
