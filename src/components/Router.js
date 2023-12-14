import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Errors from "./404";
import Home from "../pages/dashboard/Home";
import Users from "../pages/users/Users";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Contact from "../pages/contact/Contact";
import MainLayout from "../pages/MainLayout/MainLayout";

function Router() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<MainLayout />}> 
          <Route exact path='/' element={<Home />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/contact' element={<Contact />} />
        </Route>
        <Route exact path='/users' element={<Users />} />
        <Route path='*' element={<Errors />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
