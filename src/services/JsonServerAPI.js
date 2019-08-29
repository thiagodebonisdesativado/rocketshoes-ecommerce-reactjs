import Axios from 'axios';

const API = Axios.create({
  baseURL: 'http://localhost:3333',
  timeout: 1000,
});

export default API;
