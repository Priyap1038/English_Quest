import { useContext } from "react";
import "./App.css";
import { LoginPageContext } from "./Context/LoginPageContextProvider";
import Login from "./Pages/Login";
import { Register } from "./Pages/Register";
import Navbar from "./Components/Navbar";
import Teacher from "./Components/Teacher";
import { Addbook } from "./Components/Addbook";

function App() {
  const { isLoginPageVisibaleVisible, isRegisterPageVisibaleVisible } =
    useContext(LoginPageContext);
  return (
    <div className="App">
      <Navbar/>
      <Login/>
      {isLoginPageVisibaleVisible && <Login />}
      {isRegisterPageVisibaleVisible && <Register />}
    </div>
  )
}

export default App;
