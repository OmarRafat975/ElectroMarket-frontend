import axios from 'axios';

const url = import.meta.env.VITE_BACKEND_URL;

axios.defaults.withCredentials = true;

export default axios.create({
  baseURL: url,
});

export const axiosPrivate = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
