import React from "react";
import { useState } from "react";
import "./style.css";
import { FaKey } from "react-icons/fa6";
import { PiIdentificationBadgeFill } from "react-icons/pi";
import { Link } from "react-router-dom";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [passWord, setPassWord] = useState();
  const [email, setEmail] = useState();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div className="left-panel">
        <div className="logo"></div>

        <h1>Acesse a plataforma</h1>
      </div>

      <div className="right-panel">
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-icon">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Digite seu Email"
              />
              <i className="icon">
                <PiIdentificationBadgeFill />
              </i>{" "}
              {/* Replace with the proper icon */}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <div className="input-icon">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Digite sua senha"
              />{" "}
              <i className="icon">
                <FaKey />
              </i>{" "}
              {/* Replace with the proper icon */}
              <i className="toggle-password" onClick={togglePasswordVisibility}>
                {showPassword ? "🙈" : "👁️"}
              </i>
            </div>
          </div>

          <div className="form-group remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Lembrar</label>
          </div>

          <div className="container-buttons">
            <button type="submit">Entrar na plataforma</button>
            <Link to={"/cadastrar"} type="button" className="register-btn">
              Cadastrar
            </Link>
          </div>
          <a href="#" className="forgot-password">
            Esqueceu sua senha?
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
