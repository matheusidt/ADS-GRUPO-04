import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo" />
        <h1>CEUNSP</h1>
      </div>
      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">Horários</a>
        <a href="#">Fale com o Professor</a>
      </nav>
    </header>
  );
};

export default Header;
