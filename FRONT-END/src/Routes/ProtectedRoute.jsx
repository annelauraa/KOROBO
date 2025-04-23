import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { getUserFromToken, isAuthenticated } from "../utils/auth";

const ProtectedRoute = ({ children }) => {

  const userData = getUserFromToken();

  const isAdmin             = userData && userData.role === "admin";
  const isSuperAdmin        = userData && userData.role === "super_admin";
  const isUser              = userData && userData.role === "user";
  const isAuthenticatedUser = isAuthenticated() && (isAdmin || isSuperAdmin || isUser);

  if (!isAuthenticatedUser) {
    return <Navigate to="/login" />;
  }
  
  if (isAuthenticatedUser && !isAdmin && !isSuperAdmin) {
    return <Navigate to="/home" />;
  }
  return  children;
};
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;