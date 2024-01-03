// LoginPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import Header from '../../components/Header/header'; // Certifique-se de importar Header corretamente
import Footer from '../../components/Footer/footer';

function LoginPage() {
 

  return (
    <>
      <Header />
      <div className="login-page">
        <div className="login-container">
          <form className="login-form">
            <h2>Login</h2>
            <label htmlFor="username">Usuário:</label>
            <input type="text" id="username" name="username" />

            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" />

            {/* Botão para navegação usando Link */}
            <Link to="/clienteDashBoard">
              <button type="button">Entrar</button>
            </Link>

            {/* OU: Usar um manipulador de eventos no botão */}
            {/* <button type="button" onClick={handleButtonClick}>Entrar</button> */}
          </form>
        </div>

        <div className="register-link">
          <p>
            Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoginPage;
