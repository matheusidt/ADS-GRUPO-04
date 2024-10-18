import React from "react";
import { useState } from "react";
import "./style.css";
import { FaKey } from "react-icons/fa6";
import { PiIdentificationBadgeFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../utils/signIn";
import * as firebaseAuth from "firebase/auth";
import { app } from "../../utils/fireBaseApp";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passWord, setPassWord] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();
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

          <div className="container-buttons">
            <button
              onClick={(e) => {
                if (auth) {
                  e.preventDefault();
                  firebaseAuth
                    .signInWithEmailAndPassword(auth, email, passWord)
                    .then(() => {
                      // console.log("Usuario logado!!");
                      navigate("/");
                    })
                    .catch((error) => {
                      console.log(error);
                      switch (error.code) {
                        case "auth/invalid-credential":
                          alert("Email ou senha Incorretas!");
                          break;
                        case "auth/invalid-email":
                          alert("Email Inválido!");
                          break;
                        default:
                          break;
                      }
                    });
                }
              }}
            >
              Entrar na plataforma
            </button>
            <Link to={"/cadastrar"} type="button" className="register-btn">
              Cadastrar
            </Link>
          </div>
          {/* <a href="#" className="forgot-password">
            Esqueceu sua senha?
          </a> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
