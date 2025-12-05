import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <hr></hr>
      <p>✨ Random Cuteness 🐾 — creato with love by Alessandra ✨</p>
      <p className="small">
        © {new Date().getFullYear()} Tutti i diritti riservati
      </p>
    </footer>
  );
};

export default Footer;
