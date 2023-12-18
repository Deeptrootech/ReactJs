import axios from "axios";

export const axiosapi = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});
export const axiosapiSecure = axios.create({
  headers: {
    Authorization: "Bearer " + localStorage.getItem("Token"),
    "Content-Type": "application/json",
  },
});
export default axiosapi;

axiosapiSecure.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("access_token");
    req.headers["Authorization"] = "Bearer " + token;
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axiosapiSecure.interceptors.response.use(
  (res) => {
    if (res.status === 201) {
      console.log("Posted Successfully");
    }
    return res;
  },
  (err) => {
    const access_token = localStorage.getItem("access_token");
    if (err.response.status === 401 && access_token) {
      return console.log("generate new acces via refresh");
    }
    return Promise.reject(err);
  }
);
