import React from "react";
import BlueWhaleLogo from "../../images/blueWhaleLogo.png";
import "../styles.css";

const Header = () => {
  return (
    <header className="header">
        <article className="flex-center">
          <img width={80} src={BlueWhaleLogo} alt="logo" />
          <div className="flex-column-center">
            <h1 className="margin-zero">Blue Whale Aqua Solutions</h1>
            <span>Retailer & Wholesaler. Ph:6302808323</span>
          </div>
        </article>
    </header>
  );
};

export default Header;
