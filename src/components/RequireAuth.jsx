import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

const RequireAuth = ({ children }) => {
  const { user, login } = useAuth();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/checkAuth");
        const data = await response.json();
        
        if (data.authenticated) {
          login(data.user);
        }
      } catch (error) {
        console.error("Authentication error:", error);
      }
    };

    checkAuth();
  }, [login]);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RequireAuth;
