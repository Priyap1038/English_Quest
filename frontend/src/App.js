import { useContext } from "react";
import "./App.css";
import { LoginPageContext } from "./Context/LoginPageContextProvider";
import Navbar from "./Components/Navbar";
import Allroutes from "./Pages/Allroutes";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";


function App() {
  const { isLoginPageVisibaleVisible, isRegisterPageVisibaleVisible } =
    useContext(LoginPageContext);
  return (
    <div className="App">
     
      <Navbar/>
      <Allroutes/>
      {isLoginPageVisibaleVisible && <Login />}
      {isRegisterPageVisibaleVisible && <Register />}
    </div>
  )
}

export default App;
