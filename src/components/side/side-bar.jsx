import {
  GridViewRounded,
  Logout,
  SchoolRounded,
  SwitchAccountRounded,
} from "@mui/icons-material";
import "./side-bar.scss";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

const SideBar = ({ toogle }) => {
  return (
    <div className={`sideBar${toogle ? "open" : ""}`}>
      <div className={`column `}>
        <div className="menus">
          <div className="row">
            <Stack sx={{ color: "white" }}>
              <GridViewRounded sx={{ width: "44px", height: "44px" }} />
            </Stack>
          </div>
          <Stack
            sx={{
              color: "white",
              gap: "5px",
            }}
          >
            <Link to="/teacher">
              <div className="row">
                <SchoolRounded sx={{ width: "44px", height: "44px" }} />
                <span>Teachers</span>
              </div>
            </Link>
          </Stack>
          <Stack sx={{ color: "white" }}>
            <Link to="/">
              <div className="row">
                <SwitchAccountRounded sx={{ width: "44px", height: "44px" }} />
                <span>Students</span>
              </div>
            </Link>
          </Stack>
        </div>
        <div className="log">
          <Stack sx={{ color: "white" }}>
            <div className="row1">
              <Logout sx={{ width: "24px", height: "24px" }} />
              <span>Log out</span>
            </div>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
