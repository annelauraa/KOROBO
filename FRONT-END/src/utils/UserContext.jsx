import { createContext, useContext, useEffect, useState } from "react";
import { getUserFromToken, removeToken } from "./auth"; // ton fichier auth

// 1. Créer le contexte
const UserContext = createContext();

// 2. Créer le Provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Initialisation : quand le provider monte
  useEffect(() => {
    const userData = getUserFromToken();
    if (userData) {
      setUser(userData);
    }
  }, []);

  // Déconnexion
  const logout = () => {
    removeToken();
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// 3. Hook custom pour consommer le contexte
export const useUser = () => useContext(UserContext);
