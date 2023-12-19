import React from "react";
import { Route, Routes } from "react-router-dom";
import Errors from "./404";
import Home from "../pages/dashboard/Home";
import Users from "../pages/users/Users";
import Register from "../pages/register/Register";
import Login from "../pages/accounts/Login";
import Contact from "../pages/contact/Contact";
import MainLayout from "../components/MainLayout/MainLayout";
import Rooms from "../pages/rooms/Rooms";
import Booking from "../pages/booking/Booking";
import Prizing from "../pages/prizing/Prizing";
import Notification from "../pages/notification/Notification";
import Profile from "../pages/profile/Profile";
import ResetPassword from "../pages/accounts/ResetPassword";
import ForgotPassword from "../pages/accounts/ForgotPassword";
import Logout from "../pages/accounts/Logout";

function Router() {
  return (
    <>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/logout' element={<Logout />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/forgotpassword' element={<ForgotPassword />} />
        <Route exact path='/' element={<MainLayout />}>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/rooms' element={<Rooms />} />
          <Route exact path='/booking' element={<Booking />} />
          <Route exact path='/prizing' element={<Prizing />} />
          <Route exact path='/notification' element={<Notification />} />
          <Route exact path='/resetpassword' element={<ResetPassword />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/contact' element={<Contact />} />
        </Route>
        <Route exact path='/users' element={<Users />} />
        <Route path='*' element={<Errors />} />
      </Routes>
    </>
  );
}

export default Router;
