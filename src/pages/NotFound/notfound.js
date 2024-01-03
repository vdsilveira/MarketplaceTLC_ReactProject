import React from 'react';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import error404 from './103085.png';
import './notfound.css'; // Importe o arquivo de estilo diretamente

function PageNotFound() {
  return (
    <>
      <Header />
      <div className="container">
        <section className="not-found-section">
          <img src={error404} alt="Erro 404" className="error-image" />
          <h2>Ops! Conteúdo não localizado!</h2>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default PageNotFound;
