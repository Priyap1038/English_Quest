import { useContext } from "react";
import "./App.css";
import { LoginPageContext } from "./Context/LoginPageContextProvider";
import Login from "./Pages/Login";
import { Register } from "./Pages/Register";

function App() {
  const { isLoginPageVisibaleVisible, isRegisterPageVisibaleVisible } =
    useContext(LoginPageContext);
  return (
    <div className="App">
      <Login/>
      {isLoginPageVisibaleVisible && <Login />}
      {isRegisterPageVisibaleVisible && <Register />}
    </div>
  );
}

export default App;
