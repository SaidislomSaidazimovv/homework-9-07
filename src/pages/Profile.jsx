import { useNavigate } from "react-router-dom";
import "./Profile.scss";
import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogOut = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="profile">
      <div className="container">
        <div className="content">
          <div className="profile_head">
            <h1>User Information</h1>
          </div>
          {user && (
            <div className="profile_body">
              <span>User Name: {user.username} </span>
              <span>User Password: {user.password} </span>
            </div>
          )}
          <div className="btn">
            <button onClick={handleLogOut}>Log out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
