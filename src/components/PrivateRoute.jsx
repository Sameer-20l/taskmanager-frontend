import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import JwtDecode from "../utils/JwtDecode";

const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");

      if (!token || !role || (await JwtDecode())) {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(true);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) return <div>Loading...</div>;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
