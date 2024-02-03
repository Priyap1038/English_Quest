import React, { useContext, useState } from "react";
import { LoginPageContext } from "../Context/LoginPageContextProvider";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postUserRegistration } from "../Redux/Authentication/action";

export const Register = () => {
  const { handleToggleLoginPage, handleToggleRegisterPage } =
    useContext(LoginPageContext);
  const [newUserdata, setnewUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setnewUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handlePostUser = async (e) => {
    e.preventDefault();
    const status = await dispatch(postUserRegistration(newUserdata));
    if (status === 201) {
      alert("Use different email address.");
    } else {
      alert("You have successfully registered!");
    }
  };

  return (
    <div>
      <div
        onClick={handleToggleRegisterPage}
       ></div>
      <div>
        <div>
          <div
            onClick={handleToggleRegisterPage}>
            ESC
          </div>
          <h1>REGISTRATION</h1>
          <form
            onSubmit={handlePostUser}>
            <input
              onChange={handleInputChange}
              type="text"
              name="username"
              value={newUserdata.username}
              placeholder="Enter your username"
              required/>
            <input
              onChange={handleInputChange}
              type="email"
              name="email"
              required
              value={newUserdata.email}
              placeholder="Enter your email id"
              />
            <input
              onChange={handleInputChange}
              type="password"
              name="password"
              value={newUserdata.password}
              placeholder="Enter password"
              required/>
            <input
              type="submit"
              value="SUBMIT"/>
            <p>
              Already have account?{" "}
              <Link
                onClick={handleToggleLoginPage}
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
