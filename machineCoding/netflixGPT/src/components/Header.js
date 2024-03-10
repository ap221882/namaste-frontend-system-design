import React from "react";
import netflixLogo from "../../src/assets/Netflix_Logo_PMS.png";

const Header = () => {
  return (
    <div>
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
        <img src={netflixLogo} alt="logo" className="w-44" />
      </div>
    </div>
  );
};

export default Header;
