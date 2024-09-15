import React from "react";
import { useState } from "react";
import "./style.css"
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div className="left-panel">
        <img src="logo.png" alt="Logo" className="logo" />
        <h1>Acesse a plataforma</h1>
        <p>FAM.BR</p>
      </div>

      <div className="right-panel">
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="cpf">CPF</label>
            <div className="input-icon">
              <input
                type="text"
                id="cpf"
                name="cpf"
                placeholder="Digite seu CPF"
              />
              <i className="icon">🔑</i> {/* Replace with the proper icon */}
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
              />
              <i className="toggle-password" onClick={togglePasswordVisibility}>
                {showPassword ? "🙈" : "👁️"}
              </i>
            </div>
          </div>

          <div className="form-group remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Lembrar</label>
          </div>

          <button type="submit">Entrar na plataforma</button>
          <a href="#" className="forgot-password">
            Esqueceu sua senha?
          </a>
          <p>
            Suporte: <a href="mailto:informatica@fam.br">informatica@fam.br</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
