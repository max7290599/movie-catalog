import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.omdbapi.com/',
  timeout: 5000,
});

export default instance;