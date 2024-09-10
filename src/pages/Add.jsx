import { Link, useNavigate } from "react-router-dom";
import "./Add.scss";
import axios from "axios";
import { Button, MenuItem, TextField } from "@mui/material";
import { GroupAdd, KeyboardBackspace } from "@mui/icons-material";
import { useFormik } from "formik";

const AddTeacher = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      group: "",
      age: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.firstName) {
        errors.firstName = "First Name is required !!!";
      }
      if (!values.lastName) {
        errors.lastName = "Last Name is required !!!";
      }
      if (!values.group) {
        errors.group = "Group is required !!!";
      }
      if (!values.age) {
        errors.age = "Age is required !!!";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:3000/teacher", values);
        navigate("/");
      } catch (error) {
        console.log(error.message, "hatolik bor");
      }
    },
  });

  const { handleSubmit, handleChange, values, errors, touched } = formik;

  return (
    <div className="add">
      <div className="container">
        <div className="add_head">
          <Link to="/">
            <Button color="info" variant="contained">
              <KeyboardBackspace sx={{ fontSize: "35px" }} />
            </Button>
          </Link>
          <span>Add Student</span>
        </div>
        <form onSubmit={handleSubmit} className="add_body">
          <div className="add_info">
            <div className="input">
              <TextField
                label="First Name"
                name="firstName"
                type="text"
                size="medium"
                sx={{ width: "500px" }}
                value={values.firstName}
                onChange={handleChange}
              />
              <span className="err">
                {touched.firstName && errors.firstName && errors.firstName}
              </span>
            </div>
            <div className="input">
              <TextField
                label="Last Name"
                name="lastName"
                type="text"
                size="medium"
                sx={{ width: "500px" }}
                value={values.lastName}
                onChange={handleChange}
              />
              <span className="err">
                {touched.lastName && errors.lastName && errors.lastName}
              </span>
            </div>
            <div className="input">
              <TextField
                label="Age"
                name="age"
                type="number"
                size="medium"
                sx={{ width: "500px" }}
                value={values.age}
                onChange={handleChange}
              />
              <span className="err">
                {touched.age && errors.age && errors.age}
              </span>
            </div>
            <div className="input">
              <TextField
                select
                label="Level"
                name="group"
                size="medium"
                sx={{ width: "500px" }}
                value={values.group}
                onChange={handleChange}
              >
                <MenuItem value="junior">Junior</MenuItem>
                <MenuItem value="middle">Middle</MenuItem>
                <MenuItem value="senior">Senior</MenuItem>
              </TextField>
              <span className="err">
                {touched.group && errors.group && errors.group}
              </span>
            </div>
          </div>
          <div className="btn">
            <Button type="submit" variant="contained" color="info">
              <GroupAdd sx={{ fontSize: "40px" }} />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTeacher;
