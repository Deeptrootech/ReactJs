import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../../services/user.services";
import axiosapi, { axiosapiSecure } from "../../interceptor/axios";

export default function Users() {
  const [user, setUser] = useState();

  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      window.location.href = "/login";
    } else {
      axiosapiSecure.get(`${baseURL}users/`)
        .then((response) => console.log(response))
        .catch((response) => console.log(response));
    }
  }, []);

  return <div>{user}</div>;
}
