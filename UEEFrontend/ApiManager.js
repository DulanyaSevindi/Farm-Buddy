import axios from "axios";

const baseURL = "http://172.28.16.12:4000";

const ApiManager = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default ApiManager;
