import axios from "axios";
import React, { useEffect } from "react";
import { baseURL } from "../../services/user.services";
import { axiosapiSecure } from "../../interceptor/axios";

function Logout() {
  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      window.location.href = "/login";
    } else {
      axiosapiSecure
        .post(
          `${baseURL}logout/`,
          {
            refresh_token: localStorage.getItem("refresh_token"),
          },
        )
        .then((response) => {
          localStorage.clear();
          axios.defaults.headers.common["Authorization"] = null;
          window.location.href = "/login";
        })
        .catch((response) => console.log(response));
    }
  }, []);
  return <div></div>;
}

export default Logout;
