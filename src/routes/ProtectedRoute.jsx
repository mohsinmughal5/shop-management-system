import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { isLoggedIn, userRole } = useAuth();

  // If not logged in → go to login
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  // If route requires specific roles → check role
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;
