import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-text">
        &copy; {currentYear} All rights reserved by GDSC IPEC
        <br />
        Developed by <Link className="footer-link">Team GDSC</Link>
      </div>
    </div>
  );
}

export default Footer;
