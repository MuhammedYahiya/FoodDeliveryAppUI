import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Header = () => {
  const [ButtonRegister, setButtonRegister] = useState("Login");
  const onlineStatus = useOnline()

  return (
    <div className="header">
      <div className="logo">
        <img className="logo" src={LOGO_URL} alt="App-Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online:{onlineStatus ? "✅": "🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li>Cart</li>
          <button
            className="lg-button"
            onClick={() => {
              ButtonRegister == "Login"
                ? setButtonRegister("Logout")
                : setButtonRegister("Login");
            }}
          >
            {ButtonRegister}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
