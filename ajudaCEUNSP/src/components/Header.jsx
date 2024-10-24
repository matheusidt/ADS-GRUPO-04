import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? {
          backgroundColor: "black",
          color: "white",
          borderRadius: "0.375rem",
          padding: "0.5rem 0.75rem",
          transition: "background-color 0.2s, color 0.2s",
          onmouseleave: (e) => (e.target.style.backgroundColor = "#111"),
          onmouseenter: (e) => (e.target.style.backgroundColor = "black"),
        }
      : {
          color: "white",
          borderRadius: "0.375rem",
          padding: "0.5rem 0.75rem",
          transition: "background-color 0.2s, color 0.2s",
          onmouseenter: (e) => {
            e.target.style.backgroundColor = "#111";
            e.target.style.color = "white";
          },
          onmouseleave: (e) => {
            e.target.style.backgroundColor = "";
            e.target.style.color = "white";
          },
        };
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo" />
        <h1>CEUNSP</h1>
      </div>
      <nav className="navbar">
        <NavLink style={linkClass} to={"/"}>
          Home
        </NavLink>
        <NavLink style={linkClass} to={"/horarios"}>
          Horários
        </NavLink>
        <NavLink style={linkClass} to={"/talkToTeacher"}>
          Fale com o Professor
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
