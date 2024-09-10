import { Link, useParams } from "react-router-dom";
import "./Add.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, MenuItem, TextField } from "@mui/material";
import { KeyboardBackspace } from "@mui/icons-material";

const Edit = () => {
  const { id } = useParams();
  const [editData, setEditData] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    group: "All",
  });

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/students/${id}`);
        setEditData(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };

  const editStudent = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/students/${id}`, editData);
      window.location.href = "/students";
    } catch (error) {
      console.log(error.message, "hatolik bor");
    }
  };

  return (
    <div className="add">
      <div className="container">
        <div className="add_head">
          <Link to="/students">
            <Button color="info" variant="contained">
              <KeyboardBackspace sx={{ fontSize: "35px" }} />
            </Button>
          </Link>
          <span>Edit Teacher</span>
        </div>
        <div className="add_body">
          <form onSubmit={editStudent}>
            <div className="add_info">
              <div className="input">
                <TextField
                  label="First Name"
                  onChange={handleChange}
                  name="firstName"
                  type="text"
                  id="firstName"
                  size="medium"
                  sx={{ width: "500px" }}
                  value={editData.firstName}
                  required
                />
              </div>
              <div className="input">
                <TextField
                  label="Last Name"
                  onChange={handleChange}
                  name="lastName"
                  type="text"
                  size="medium"
                  sx={{ width: "500px" }}
                  value={editData.lastName}
                  required
                  id="lastName"
                />
              </div>
              <div className="input">
                <TextField
                  label="Age"
                  onChange={handleChange}
                  name="age"
                  type="number"
                  size="medium"
                  sx={{ width: "500px" }}
                  value={editData.age}
                  required
                  id="age"
                />
              </div>
              <div className="input">
                <TextField
                  select
                  label="Group"
                  onChange={handleChange}
                  name="group"
                  value={editData.group}
                  size="medium"
                  id="group"
                  sx={{ width: "500px" }}
                  required
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="N45">N45</MenuItem>
                  <MenuItem value="N50">N50</MenuItem>
                  <MenuItem value="N38">N38</MenuItem>
                </TextField>
              </div>
            </div>
            <div className="btn">
              <Button type="submit" variant="contained" color="info">
                Save Teacher
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
