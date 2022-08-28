import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Headers": "origin, content-type, accept",
    "Access-Control-Allow-Origin": "http://localhost:5000/",
    "Content-type": "application/json",
    Accept: "application/json",
  },
});
