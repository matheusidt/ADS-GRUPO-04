import React, { useState } from "react";
import "./style.css";
import { FaKey } from "react-icons/fa6";
import { PiIdentificationBadgeFill } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md"; // Novo ícone para e-mail
import { BsPersonFill } from "react-icons/bs"; // Novo ícone para nome
import { signUp } from "../../utils/signUp";
import { Link } from "react-router-dom";
import { app } from "../../utils/fireBaseApp";
import * as firebaseAuth from "firebase/auth";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [cadastrado, setCadastrado] = useState(false);
  const [passWord, setPassWord] = useState();
  const [CPF, setCPF] = useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState();

  const auth = firebaseAuth.getAuth(app);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function formataCPF(cpf) {
    //retira os caracteres indesejados...
    if (cpf) {
      if (cpf.length < 9) {
        alert("CPF Inválido!");
        return;
      } else {
        cpf = cpf.replace(/[^\d]/g, "");

        //realizar a formatação...
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
      }
    }
  }

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
                onChange={(e) => setName(e.currentTarget.value)}
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
                onChange={(e) => setCPF(e.target.value)}
                placeholder="Ex: 12345678909"
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

          <Link
            className="signUp-button"
            onClick={() => {
              formataCPF(CPF);
              signUp(auth, email, passWord, name);
            }}
            to={"/login"}
          >
            Cadastrar
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
