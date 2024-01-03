import { useState } from 'react';
import './cadastro.css';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import { Link } from 'react-router-dom';
function generateKeyPair() {
  const crypto = window.crypto.subtle;

  return crypto.generateKey(
    {
      name: 'RSA-OAEP',
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: 'SHA-256',
    },
    true,
    ['encrypt', 'decrypt']
  );
}

function CadastroPage() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const keyPair = await generateKeyPair();

      const publicKey = await window.crypto.subtle.exportKey('spki', keyPair.publicKey);
      const privateKey = await window.crypto.subtle.exportKey('pkcs8', keyPair.privateKey);

      const publicKeyBase64 = btoa(String.fromCharCode(...new Uint8Array(publicKey)));
      const privateKeyBase64 = btoa(String.fromCharCode(...new Uint8Array(privateKey)));

      const userData = {
        login,
        senha,
        email,
        tipoUsuario,
        publicKey: publicKeyBase64,
        privateKey: privateKeyBase64,
      };

      console.log('Usuário:', userData);

      // Enviar os dados para o servidor
      const response = await fetch('http://localhost:3003/api/cadastrar-usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('Usuário cadastrado com sucesso');
      } else {
        console.error('Erro ao cadastrar o usuário:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao gerar as chaves ou enviar dados ao servidor:', error);
    }
  };

  return (
    <>
      <Header />
      <div className="cadastro-page">
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="login">Login:</label>
          <input
            type="text"
            id="login"
            name="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />

          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="tipoUsuario">Tipo de Usuário:</label>
          <select
            id="tipoUsuario"
            name="tipoUsuario"
            value={tipoUsuario}
            onChange={(e) => setTipoUsuario(e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="cliente">Cliente</option>
            <option value="provedor">Provedor de Serviço</option>
            <option value="fornecedor">Fornecedor de Serviço</option>
          </select>
          <Link to="/login">
          <button type="submit" className="cadastro link-button">cadastre-se</button>
          </Link>
          

        </form>
      </div>
      <Footer />
    </>
  );
}

export default CadastroPage;
