import React from "react";
import "../styles.css";
import { CONTACT_NUMBER } from "../../utils/StringConstants";

const Footer = () => {
  return (
    <footer className="footer flex-center">
      <div className="flex-column-center text-align-center">
        <span>Blue Whale Aqua Solutions</span>
        <span>Ramdas Street, Near Busstand, Nidadavole, AP (534301)</span>
        <span>Contact: {CONTACT_NUMBER}</span>
      </div>
    </footer>
  );
};

export default Footer;
