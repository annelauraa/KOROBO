
import axios from 'axios';
import { getToken } from '../utils/auth';

const api = axios.create({
<<<<<<< HEAD
  baseURL: 'https://korobo-api.onrender.com/api', 
=======
  baseURL: 'https://korobo-api.onrender.com/api/',
  // baseURL: 'http://localhost:3000/api/', /** DEV */
>>>>>>> 6c29422608ed0200d80a421fbb9ed4a3b1a89bf6
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`, 
  },
});

export default api;