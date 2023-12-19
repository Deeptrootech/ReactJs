import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../../services/user.services";
import axiosapi, { axiosapiSecure } from "../../interceptor/axios";
import { useNavigate } from "react-router-dom";


export default function Users() {
  const navigate = useNavigate();

  const [user, setUser] = useState();

  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      navigate("/login");
    } else {
      axiosapiSecure
        .get(`${baseURL}users/`)
        .then((response) => console.log(response))
        .catch((response) => console.log(response));
    }
  }, []);

  return <div>{user}</div>;
}
