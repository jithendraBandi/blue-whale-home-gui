import React from "react";
import BlueWhaleLogo from "../../images/blueWhaleLogo.png";
import "../styles.css";

const Header = () => {
  return (
    <header className="header">
        <div className="flex-center">
          <img width={80} src={BlueWhaleLogo} alt="logo" />
          <div className="flex-column-center">
            <p className="margin-zero main-company-title">Blue Whale Aqua Solutions</p>
            <span>Retailer & Wholesaler. Ph:6302808323</span>
          </div>
        </div>
    </header>
  );
};

export default Header;
