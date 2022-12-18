import React from "react";
import "./navbar.css"

 export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo"><h2>Booking.com</h2></span>
        <div className="navItem">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;