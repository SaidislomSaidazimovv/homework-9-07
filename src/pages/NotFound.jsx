import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(`404: Page not found for ${location.pathname}`);
  }, [location]);

  return (
    <div className='container'>
        <h1>
            Page Not Found
        </h1>
    </div>
  );
};

export default NotFound;
