// src/axios.js
import axios from 'axios';

// Create an Axios instance
const AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // or your API URL
  timeout: 1000,
});

export default AxiosInstance;
