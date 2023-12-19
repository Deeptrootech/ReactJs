import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { baseURL } from "../../services/user.services";
import { axiosapiSecure } from "../../interceptor/axios";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      navigate("/login");
    } else {
      axiosapiSecure
        .post(`${baseURL}logout/`, {
          refresh_token: localStorage.getItem("refresh_token"),
        })
        .then((response) => {
          localStorage.clear();
          axios.defaults.headers.common["Authorization"] = null;
          navigate("/login");
        })
        .catch((response) => console.log(response));
    }
  }, []);
  return <div></div>;
}

export default Logout;
