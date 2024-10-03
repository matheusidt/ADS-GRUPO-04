import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo" />
        <h1>CEUNSP</h1>
      </div>
      <nav className="navbar">
        <Link to={"/"}>Home</Link>
        <Link>Horários</Link>
        <Link>Fale com o Professor</Link>
      </nav>
    </header>
  );
};

export default Header;
