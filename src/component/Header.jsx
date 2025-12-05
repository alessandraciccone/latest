import React from "react";
import caneeg from "../assets/img/caneeg.png";

const Header = () => {
  return (
    <header style={{ textAlign: "center", marginBottom: "20px" }}>
      <img
        src={caneeg}
        alt="caneegatto"
        style={{ width: "130px", borderRadius: "50%" }}
      />
      <h2>Random Cuteness 🐾</h2>
    </header>
  );
};

export default Header;
