import { LOGO_URL } from "../utils/constants";
import React, { useState } from "react";

const Header = () => {

  const [btnName,setlogin]=useState("Login")

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt=" "></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>My Cart</li>
          <button className="login-btn" onClick={()=>{
            btnName === "Login"?
            setlogin("Logout"):
            setlogin("Login")
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
