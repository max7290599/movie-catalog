import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.omdbapi.com/?&apikey=8523cbb8/',
  timeout: 5000,
});

export default instance;