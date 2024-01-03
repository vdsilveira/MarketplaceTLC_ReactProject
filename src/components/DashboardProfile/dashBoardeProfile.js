// src/components/DashboardProfile/dashBoardProfile.js
import React, { useState, useEffect } from 'react';
import './dashBoardProfile.css';
import profile from '../imagens/profile.png';

const DashBoardProfile = () => {
  // Inicialize os estados com os valores do localStorage ou padrões
  const [tlc, setTLC] = useState(parseFloat(localStorage.getItem('tlc')) || 0);
  const [saldo, setSaldo] = useState(parseFloat(localStorage.getItem('saldo')) || 0);

  useEffect(() => {
    // Atualize os estados quando o localStorage for alterado
    const handleStorageChange = () => {
      setTLC(parseFloat(localStorage.getItem('tlc')) || 0);
      setSaldo(parseFloat(localStorage.getItem('saldo')) || 0);
    };

    // Adicione um ouvinte de evento para capturar alterações no localStorage
    window.addEventListener('storage', handleStorageChange);

    // Limpe o ouvinte de evento ao desmontar o componente
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []); // O segundo argumento vazio [] garante que o useEffect seja executado apenas uma vez durante a montagem

  return (
    <div className="profile">
      <div className="user-info-container">
        <div className="foto" style={{ backgroundImage: `url(${profile})` }}></div>
        <span className="User">Vinicius</span>
      </div>

      <div className="info-container1">
        <div className="TLC">TLC: {tlc.toFixed(2)}</div>
        <div className="RS">R$: {saldo.toFixed(2)}</div>
      </div>

      <div className="info-container2">
        <div className="Wallet">Wallet: 0x00000000000000000001</div>
        <div className="Contratos">Contratos: 10</div>
      </div>
    </div>
  );
};

export default DashBoardProfile;
