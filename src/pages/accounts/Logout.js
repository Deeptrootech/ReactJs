import axios from "axios";
import React, { useEffect } from "react";
import { baseURL } from "../../services/user.services";

function Logout() {
  useEffect(() => {
    (async () => {
      try {
        debugger;
        const data = await axios.post(
          `${baseURL}logout/`,
          {
            refresh_token: localStorage.getItem("refresh_token"),
          },
          { headers: { "Content-Type": "application/json" } },
          { withCredentials: true }
        );
        localStorage.clear();
        axios.defaults.headers.common["Authorization"] = null;
        window.location.href = "/login";
      } catch (e) {
        console.log("logout not working", e);
      }
    })();
  }, []);
  return <div></div>;
}

export default Logout;
