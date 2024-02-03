import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postUserLogin } from "../Redux/Authentication/action";
import {useDispatch, useSelector} from "react-redux";
import {LoginPageContext} from "../Context/LoginPageContextProvider";

const Login = () => {

  const [LoginData, setLoginData] = useState({ email: "", password: "" });
  const {token} = useSelector((store)=> store.authReducer);
  const {handleToggleLoginPage, handleToggleRegisterPage } = useContext(LoginPageContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // the value from input is catched;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => {
      return { ...prev, [name]: value };
    });
  };
// console.log(LoginData);


  const handleLogin = async(e) => {
    e.preventDefault();
    
    const status = await dispatch(postUserLogin(LoginData));

    if(status=== 201){
        alert("Wrong Credential")
    }
    else if(status=== 200){
        alert("You have logged in successfully");
    }
    else{
        alert("Something went wrong!");
    }
  };

if(token){
    handleToggleLoginPage(false);
    navigate("/")
}

  return (
    <div>
      <h1 id="login">Login</h1>
      <label> User Name</label>
      <br />
      <input
        type="email"
        name="email"
        value={LoginData.email}
        onChange={handleChange}
        placeholder="Enter Username"
      />
      <br />
      <label>Password</label>
      <br />
      <input
        type="password"
        name="password"
        value={LoginData.password}
        onChange={handleChange}
        placeholder="Enter Password"
      />
      <br />

      <button onClick={handleLogin}>Login</button>
      
      <p>New User ? Click here <Link onClick={handleToggleRegisterPage }>Signup</Link> </p>
    </div>
  );
};

export default Login;
