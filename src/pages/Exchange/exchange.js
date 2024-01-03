// Importações necessárias
import React, { useState, useEffect } from 'react';
import './exchange.css';
import ThirdHeader from '../../components/ThirdHeader/thirdearder';
import Footer from '../../components/Footer/footer';
import DashBoardProfile from '../../components/DashboardProfile/dashBoardeProfile';

// Componente Exchange
function Exchange() {
  const [saldo, setSaldo] = useState(parseFloat(localStorage.getItem('saldo')) || 0);
  const [transacaoCompra, setTransacaoCompra] = useState('');
  const [transacaoVenda, setTransacaoVenda] = useState('');
  const [transacaoDeposito, setTransacaoDeposito] = useState('');
  const [transacaoSaque, setTransacaoSaque] = useState('');
  const [tlc, setTLC] = useState(parseFloat(localStorage.getItem('tlc')) || 0);

  useEffect(() => {
    // Atualizar localStorage sempre que saldo ou tlc mudar
    localStorage.setItem('saldo', saldo.toFixed(2));
    localStorage.setItem('tlc', tlc.toFixed(2));
  }, [saldo, tlc]);

  function handleDeposito() {
    const valorDeposito = parseFloat(transacaoDeposito);

    if (isNaN(valorDeposito) || valorDeposito <= 0) {
      alert('Por favor, insira um valor válido para o depósito.');
      return;
    }

    const novoSaldo = saldo + valorDeposito;
    setSaldo(novoSaldo);
    setTransacaoDeposito('');
  }

  function handleSaque() {
    const valorSaque = parseFloat(transacaoSaque);

    if (isNaN(valorSaque) || valorSaque <= 0 || valorSaque > saldo) {
      alert('Por favor, insira um valor válido para o saque.');
      return;
    }

    const novoSaldo = saldo - valorSaque;
    setSaldo(novoSaldo);
    setTransacaoSaque('');
  }

  function handleCompraTLC() {
    const valorCompraTLC = parseFloat(transacaoCompra);

    if (isNaN(valorCompraTLC) || valorCompraTLC <= 0 || valorCompraTLC > saldo) {
      alert('Por favor, insira um valor válido para a compra de TLC.');
      return;
    }

    const novoSaldo = saldo - valorCompraTLC;
    setSaldo(novoSaldo);

    const novoTLC = parseFloat(tlc) + valorCompraTLC;
    setTLC(novoTLC);
    setTransacaoCompra('');
  }

  function handleVendaTLC() {
    const valorVendaTLC = parseFloat(transacaoVenda);

    if (isNaN(valorVendaTLC) || valorVendaTLC <= 0 || valorVendaTLC > tlc) {
      alert('Por favor, insira um valor válido para a venda de TLC.');
      return;
    }

    const novoTLC = tlc - valorVendaTLC;
    setTLC(novoTLC);

    const novoSaldo = saldo + valorVendaTLC;
    setSaldo(novoSaldo);

    setTransacaoVenda('');
  }

  return (
    <React.Fragment>
      <ThirdHeader />
      <DashBoardProfile />

      <div className="container-wrapper">
        {/* Container de Compra */}
        <div className="container swap_container">
          <div className="container-part title-part">
            <h2>Swap</h2>
          </div>
          <div className="container-part input-part">
            <div className="input-container">
              <input
                type="number"
                value={transacaoCompra}
                onChange={(e) => setTransacaoCompra(e.target.value)}
              />
              <button className="botaoCompraTLC botaoAzul" onClick={handleCompraTLC}>
                Comprar TLC
              </button>
            </div>
            <div className="input-container">
              <input
                type="number"
                value={transacaoVenda}
                onChange={(e) => setTransacaoVenda(e.target.value)}
              />
              <button className="botaoVendaTLC botaoVermelho" onClick={handleVendaTLC}>
                Vender TLC
              </button>
            </div>
            {/* Outros campos e botões */}
          </div>
          <div className="container-part saldo-part">
            <div className="saldo-container">
              <h2>Saldo TLC: {tlc.toFixed(2)}</h2>
            </div>
          </div>
        </div>

        {/* Container de Depósito */}
        <div className="container deposito_container">
          <div className="container-part title-part">
            <h2>Saques e Depósitos</h2>
          </div>
          <div className="container-part input-part">
            <div className="input-container">
              <input
                type="number"
                value={transacaoDeposito}
                onChange={(e) => setTransacaoDeposito(e.target.value)}
              />
              <button className="botaoDeposito botaoAzul" onClick={handleDeposito}>
                Depósito
              </button>
            </div>
            <div className="input-container">
              <input
                type="number"
                value={transacaoSaque}
                onChange={(e) => setTransacaoSaque(e.target.value)}
              />
              <button className="botaoSaque botaoVermelho" onClick={handleSaque}>
                Saque
              </button>
            </div>
            {/* Outros campos e botões */}
          </div>
          <div className="container-part saldo-part">
            <div className="saldo-container">
              <h2>Saldo R$: {saldo.toFixed(2)}</h2>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Exchange;
