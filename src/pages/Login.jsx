import "./Login.scss";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const Login = ({ login }) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      localStorage.setItem("user", JSON.stringify(values));
      login(values);
      navigate("/");
    },
    validate: (values) => {
      let errors = {};
      if (values.username === "") {
        errors.username = "UserName is required";
      }
      if (values.password === "") {
        errors.password = "Password is required";
      }
      return errors;
    },
  });

  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    formik;
  console.log(errors);
  return (
    <>
      {login && (
        <div className="login">
          <div className="container">
            <div className="content">
              <div className="login_head">
                <h1>Login</h1>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(formik.onSubmit);
                }}
                className="login_body"
              >
                <div className="login_info">
                  <div className="info">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      value={values.username}
                      onChange={handleChange}
                      name="username"
                      id="username"
                      onBlur={handleBlur}
                    />
                    <span className="err">
                      {touched.username && errors.username && errors.username}
                    </span>
                  </div>
                  <div className="info">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                      name="password"
                      id="password"
                      onBlur={handleBlur}
                    />
                    <span className="err">
                      {touched.password && errors.password && errors.password}
                    </span>
                  </div>
                </div>
                <div className="btn">
                  <button type="submit">Sign in</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;

