import React from 'react';
import './clienteDashBoard.css';
import SecundHeader from '../../components/SecundHeader/secundHearder';
import Footer from '../../components/Footer/footer';
import planoDeDadosImg from '../../components/imagens/PlanodeDados.png';
import ViasateliteImg from '../../components/imagens/Viasatelite.png';
import OutroServicoImg from '../../components/imagens/OutroServico.jpeg';
import DashBoardProfile from '../../components/DashboardProfile/dashBoardeProfile'; // Corrigir o nome do componente


function ClienteDashBoard() {
  return (
    <>
      <SecundHeader />
      <DashBoardProfile /> {/* Corrigir o nome do componente */}
      <div className="Card-page">
        <div className="dadosMoveis-container">
          <h2>Dados Móveis</h2>
          <img src={planoDeDadosImg} alt="Dados Móveis" />
          <label htmlFor="password">Valor: R$40</label>
          <button type="button">Contratar</button>
        </div>

        <div className="Internet-container">
          <h2>Internet via Satélite</h2>
          <img src={ViasateliteImg} alt="Internet via Satélite" />
          <label htmlFor="password">Valor: R$250</label>
          <button type="button">Contratar</button>
        </div>

        <div className="OutroServico-container">
          <h2>Outro Serviço</h2>
          <img src={OutroServicoImg} alt="Outro Serviço" />
          <label htmlFor="password">Valor: R$1000</label>
          <button type="button">Contratar</button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ClienteDashBoard;
