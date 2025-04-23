import api from './api';
import { removeToken, setToken } from '../utils/auth';

export const login = async ({ email, mot_de_passe }) => {
  try {
    const response = await api.post('/auth/login', { email, mot_de_passe });
    setToken(response.data.token);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error.response?.data?.error || 'Erreur lors de la connexion';
  }
};

export const signup = async ({ nom, email, mot_de_passe, telephone, adresse, logo }) => {
  try {
    const response = await api.post('/entreprises', { nom, email, mot_de_passe, telephone, adresse, logo });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Erreur lors de l’inscription';
  }
};

export const logout = () => {
  removeToken();
};
