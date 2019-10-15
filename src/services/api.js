import axios from 'axios';

const api = axios.create({
  baseURL: 'http://173.249.32.58:3030/',
});

export default api;
