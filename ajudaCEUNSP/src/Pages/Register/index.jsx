import React, { useState } from "react";
import "./style.css";
import { FaKey } from "react-icons/fa6";
import { PiIdentificationBadgeFill } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md"; // Novo ícone para e-mail
import { BsPersonFill } from "react-icons/bs"; // Novo ícone para nome
import { signUp } from "../Login/utils/signUp";
import { Link } from "react-router-dom";
import { app } from "../Login/utils/fireBaseApp";
import * as firebaseAuth from "firebase/auth";
const auth = firebaseAuth.initializeAuth(app);
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [passWord, setPassWord] = useState();
  const [email, setEmail] = useState();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="container">
      <div className="left-panel">
        <div className="logo"></div>

        <h1>Crie sua conta</h1>
      </div>

      <div className="right-panel">
        <form className="register-form">
          {/* Campo Nome */}
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <div className="input-icon">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Digite seu nome"
              />
              <i className="icon">
                <BsPersonFill />
              </i>
            </div>
          </div>

          {/* Campo Email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-icon">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <i className="icon">
                <MdOutlineEmail />
              </i>
            </div>
          </div>

          {/* Campo CPF */}
          <div className="form-group">
            <label htmlFor="cpf">CPF</label>
            <div className="input-icon">
              <input
                type="text"
                id="cpf"
                name="cpf"
                placeholder="Digite seu CPF"
              />
              <i className="icon">
                <PiIdentificationBadgeFill />
              </i>
            </div>
          </div>

          {/* Campo Senha */}
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <div className="input-icon">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Digite sua senha"
                onChange={(e) => setPassWord(e.target.value)}
              />
              <i className="icon">
                <FaKey />
              </i>
              <i className="toggle-password" onClick={togglePasswordVisibility}>
                {showPassword ? "🙈" : "👁️"}
              </i>
            </div>
          </div>

          {/* Campo Confirmar Senha */}
          <div className="form-group">
            <label htmlFor="confirm-password">Confirmar Senha</label>
            <div className="input-icon">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm-password"
                name="confirm-password"
                placeholder="Confirme sua senha"
              />
              <i className="icon">
                <FaKey />
              </i>
              <i
                className="toggle-password"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </i>
            </div>
          </div>

          {/* Termos de uso e política de privacidade */}
          <div className="form-group remember-me">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              Eu aceito os <a href="#">Termos de Uso</a> e a{" "}
              <a href="#">Política de Privacidade</a>.
            </label>
          </div>

          <Link onClick={() => signUp(auth, email, passWord)}>Registrar</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
