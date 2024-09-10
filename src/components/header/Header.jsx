import { Button } from "@mui/material";
import "./Header.scss";
import { AccountCircle, Dehaze } from "@mui/icons-material";

import { Link } from "react-router-dom";
import { useAuth } from "../Auth";

const Header = (props) => {
  const { user } = useAuth();
  const { toggleSidebar } = props;

  return (
    <div className="header">
      <div className="container">
        <nav>
          <div className="nav_btn">
            <Button
              onClick={toggleSidebar}
              sx={{ fontSize: "100px", color: "black" }}
              variant="text"
            >
              <div className="menu">
                <Dehaze sx={{ fontSize: "50px", color: "black" }} />
              </div>
            </Button>
          </div>
          {user ? (
            <Link to="/teacher" className="login">
              <AccountCircle sx={{ fontSize: "40px" }} />
              <span>{user ? user.username : "Profile"}</span>
            </Link>
          ) : (
            <Link to={"/login"} className="login">
              <AccountCircle sx={{ fontSize: "40px" }} />
              <span>Login</span>
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
