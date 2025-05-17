
import axios from 'axios';
import { getToken } from '../utils/auth';

const api = axios.create({
  baseURL: 'https://korobo-api.onrender.com/api/',
  // baseURL: 'http://localhost:3000/api/', /** DEV */
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`, 
  },
});

export default api;
