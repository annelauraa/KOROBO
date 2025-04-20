import { jwtDecode } from "jwt-decode";

export const setToken = (token) => {
    localStorage.setItem("token", token);
};

export const getToken = () => {
    return localStorage.getItem("token");
};

export const removeToken = () => {
    localStorage.removeItem("token");
};

export const isAuthenticated = () => {
    return !!getToken();
};

export const getUserFromToken = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;
  
    try {
      const decoded = jwtDecode(token);
      return decoded;  // ex: { id, email, role, nom, iat, exp }
    } catch (error) {
      console.error("Token invalide", error);
      removeToken();
      return null;
    }
  }