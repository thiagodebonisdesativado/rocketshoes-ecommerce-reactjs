import Axios from 'axios';

const API = Axios.create({
  baseURL: 'http://localhost:3333',
});

export default API;
