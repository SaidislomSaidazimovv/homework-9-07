import SiteBar from "../components/sidebar-and-header";
import { Routes, Route } from "react-router-dom";
import Home from "./../pages/Home/Home";
import Edit from "./../pages/Edit";
import Add from "./../pages/Add";
import HomeTeacher from "../pages/Home/Teacher-home";
import EditTeacher from "../pages/edit-teacher";
import Profile from "./../pages/Profile";
import Login from "./../pages/Login";
import AddTeacher from "../pages/add-teacher";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Router = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigation = useNavigate();
  const parms = window.location.href;
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLogin(true);
      if (parms.includes("/login")) {
        return navigation("/");
      }
      return;
    } else {
      setIsLogin(false);
      return navigation("/login");
    }
  }, [isLogin, parms]);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login login={setIsLogin} />} />
        <Route path="/" element={<SiteBar />}>
          <Route index element={<HomeTeacher />} />
          <Route path="/students" element={<Home />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/add" element={<Add />} />
          <Route path="/addteacher" element={<AddTeacher />} />
          <Route path="/teacher/:id" element={<EditTeacher />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;