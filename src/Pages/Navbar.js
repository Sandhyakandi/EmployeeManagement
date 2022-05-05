import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "./Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(true);
  };
  return (
    <div className="navbar">
      <div className="leftSide">
        <h2>Employee Record system</h2>
        <div className="hiddenLinks">
        <Link to="/home">Home</Link>
          <Link to="/register"> Register</Link>
          <Link to="/reports"> Reports </Link>
        <Link to="/login">Logout</Link>
        </div>
      </div>
      
      <div className="rightSide">
      <Link to="/home">Home</Link>
      <Link to="/register"> Register</Link>
          <Link to="/reports"> Reports </Link>
          <Link to="/login">Logout</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
