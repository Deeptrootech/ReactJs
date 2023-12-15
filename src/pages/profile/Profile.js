import React, { useEffect, useState } from "react";
import { baseURL } from "../../services/user.services";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(`${baseURL}users/`)
      .then((response) => {
        console.log(`${baseURL}users/`,response.data);
        setUser(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return <div>{user.email}</div>;
}

export default Profile;
