import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API,
    timeout: 1000
});
  
export default api