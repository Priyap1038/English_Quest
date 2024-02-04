import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postUserLogin } from "../Redux/Authentication/action";
import { useDispatch, useSelector } from "react-redux";
import { LoginPageContext } from "../Context/LoginPageContextProvider";

const Login = () => {
  const [LoginData, setLoginData] = useState({ email: "", password: "",role:"" });
  const { token } = useSelector((store) => store.authReducer);
  const { handleToggleLoginPage, handleToggleRegisterPage } =
    useContext(LoginPageContext);
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

    if (status === 201) {
      alert("Wrong Credential");
    } else if (status === 200) {
      alert("You have logged in successfully");
    } else {
      alert("Something went wrong!");
    }
  };

  if (token) {
    handleToggleLoginPage(false);
    navigate("/books");
  }

  return (
            <div style={{border:"solid 1px green", margin:"20%"}}>
            {/* <div onClick={handleToggleLoginPage}></div> */}
            <div >
              <h1>LOGIN</h1>
                <form onSubmit={handleLogin}>
                    <div onClick={handleToggleLoginPage} >
                        ESC
                    </div>
                    <div >
                        <input
                            onChange={handleChange}
                            type="email"
                            name='email'
                            value={LoginData.email}
                            required
                            placeholder='Enter your email id'
                           
                        />
                        <input
                            onChange={handleChange}
                            type="password"
                            name='password'
                            value={LoginData.password}
                            required
                            placeholder='Enter password'
                           
                        />
                        <select name="role" id="" value={LoginData.role} onChange={handleChange}>
                          <option value="">Select the role</option>
                          <option value="CREATOR">Teacher</option>
                          <option value="VIEW_ALL">Student</option>
                        </select>
                        <input type='submit' value="LOGIN" />
                        <p>Don't have an account? <Link onClick={handleToggleRegisterPage} >Signup</Link></p>
                    </div>
                </form>
            </div>
        </div>
  )
};

export default Login;
