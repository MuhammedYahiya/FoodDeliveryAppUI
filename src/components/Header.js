import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import logo from '../../static/images/logo.png'

const Header = () => {
  const [ButtonRegister, setButtonRegister] = useState("Login");
  const onlineStatus = useOnline()

  return (
    <div className="flex justify-between bg-white shadow-md">
      <div className="">
        <img className="w-[125px]" src={logo} alt="App-Logo" />
      </div>
      <div className="flex  items-center ">
        <ul className="flex font-bold py-4 text-lg" >
          <li className="m-3 p-3">Online:{onlineStatus ? "✅": "🔴"}</li>
          <li className="m-3 p-3"><Link to="/">Home</Link></li>
          <li className="m-3 p-3"><Link to="/about">About Us</Link></li>
          <li className="m-3 p-3">Cart</li>
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
