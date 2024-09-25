import React from "react";
import { useState } from "react";
import "./style.css";
import { FaKey } from "react-icons/fa6";
import { PiIdentificationBadgeFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { signIn } from "../../utils/signIn";
import * as firebaseAuth from "firebase/auth";
import { app } from "../../utils/fireBaseApp";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passWord, setPassWord] = useState();
  const [email, setEmail] = useState();

  const auth = firebaseAuth.getAuth(app);

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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassWord(e.target.value)}
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
            <button
              onClick={(e) => signIn(auth, email, passWord, e.preventDefault())}
            >
              Entrar na plataforma
            </button>
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
