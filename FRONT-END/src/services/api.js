
import axios from 'axios';
import { getToken } from '../utils/auth';

const api = axios.create({
  baseURL: 'https://korobo-api.onrender.com/api', 
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`, 
  },
});

export default api;
