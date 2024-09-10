import { Link, useParams, useNavigate } from "react-router-dom";
import "./Add.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, MenuItem, TextField } from "@mui/material";
import { KeyboardBackspace } from "@mui/icons-material";

const EditTeacher = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editData, setEditData] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    group: "All",
  });

  const fetchStudent = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/teacher/${id}`);
      setEditData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const editStudent = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/teachers/${id}`, editData);
      navigate("/");
    } catch (error) {
      console.log(error.message, "hatolik bor");
    }
  };

  return (
    <div className="add">
      <div className="container">
        <div className="add_head">
          <Link to="/">
            <Button color="success" variant="contained">
              <KeyboardBackspace sx={{ fontSize: "35px" }} />
            </Button>
          </Link>
          <span>Edit Teacher</span>
        </div>
        <div className="add_body">
          <div className="add_info">
            <div className="input">
              <TextField
                label="First Name"
                onChange={handleChange}
                name="firstName"
                type="text"
                size="medium"
                sx={{ width: "300px" }}
                value={editData.firstName}
                required
              />
            </div>
            <div className="input">
              <TextField
                type="text"
                value={editData.lastName}
                onChange={handleChange}
                name="lastName"
                size="medium"
                required
                label="Last Name"
                sx={{ width: "300px" }}
              />
            </div>
            <div className="input">
              <TextField
                type="number"
                label="Age"
                value={editData.age}
                onChange={handleChange}
                name="age"
                size="medium"
                sx={{ width: "300px" }}
                required
              />
            </div>

            <div className="input">
              <TextField
                select
                label="Level"
                onChange={handleChange}
                name="group"
                size="medium"
                value={editData.group}
                sx={{ width: "300px" }}
                required
                id="group"
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="junior">Junior</MenuItem>
                <MenuItem value="middle">Middle</MenuItem>
                <MenuItem value="senior">Senior</MenuItem>
              </TextField>
            </div>
          </div>
          <div className="btn">
            <Link onClick={editStudent} to="/">
              <Button variant="contained" color="success">
                Save Teacher
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTeacher;
