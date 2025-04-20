import { useLayoutEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { isAuthenticated, removeToken } from '../../utils/auth';

const Logout = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (isAuthenticated()) {
      removeToken();
    }
    navigate("/login");
  }, [navigate]);

  return null;
};

export default Logout;
