export const baseURL = "http://127.0.0.1:8000/api/v1/";
export const headers = {
  "Content-type": "application/json",
};

const getAccessToken = () => {
  return localStorage.getItem("access_token");
}

const setAccessToken = (token_value) => {
  return localStorage.setItem("access_token", token_value);
}

const getRefreshToken = () => {
  return localStorage.getItem("refresh_token");
}

const setRefreshToken = (token_value) => {
  return localStorage.setItem("refresh_token", token_value);
}