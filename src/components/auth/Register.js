import React, { useState } from "react";
import styles from "./auth.module.scss";
import { TiUserAddOutline } from "react-icons/ti";
import Card from "../../components/card/Card";
import { toast } from "react-toastify";
import { registerUser, validateEmail } from "../../services/authService";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SET_LOGIN, SET_NAME } from "../../redux/features/auth/authSlice";
import axios from "axios";
const Register = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dftygokow/image/upload",
        data
      );

      const { url } = uploadRes.data;

      const newUser = {
        ...info,
        img: url,
      };

      await axios.post(
        "https://newsflash.herokuapp.com/api/auth/register",
        newUser
      );
      navigate("/login");
    } catch (err) {}
  };

  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <TiUserAddOutline size={35} color="#999" />
          </div>
          <h2>Register</h2>
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <form>
            <div className="formInput">
              <label htmlFor="file">Click here to add Image</label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>
            <input
              type="text"
              placeholder="Name"
              required
              name="name"
              id="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              id="email"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Country"
              id="country"
              onChange={handleChange}
              className="lInput"
            />

            <input
              type="text"
              placeholder="City"
              id="city"
              onChange={handleChange}
              className="lInput"
            />

            <input
              type="text"
              placeholder="Phone Number"
              id="phone"
              onChange={handleChange}
              className="lInput"
            />

            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              id="password"
              onChange={handleChange}
            />

            <button onClick={handleClick}>Send</button>
          </form>

          <span className={styles.register}>
            <Link to="/">Home</Link>
            <p> &nbsp; Already have an account? &nbsp;</p>
            <Link to="/login">Login</Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Register;
