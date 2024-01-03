import React from 'react';
import Header from '../../components/Header/header.js';
import Footer from '../../components/Footer/footer.js';
import './quemSomos.css'; // Importe o arquivo de estilo diretamente

function QuemSomosApp() {
  return (
    <div className="quemSomos"> {/* Adicione a classe ao elemento que envolve o conteúdo */}
      <Header />


      <div className='script'>
      <h1>Bem-vindo ao Marketplace Telecom</h1>
      <p>Somos uma equipe dedicada e visionária, apaixonada por transformar a paisagem das telecomunicações por meio da integração de tecnologias de ponta.</p>

      <h2>Nossa Missão</h2>
      <p>Na vanguarda da evolução das redes de telecomunicações, nossa missão é proporcionar um ambiente robusto e seguro para o compartilhamento eficiente de recursos 5G e 6G.</p>

      <h2>O Que Nos Diferencia</h2>
      <ul>
        <li><strong>Inovação Tecnológica:</strong> Estamos comprometidos em oferecer soluções que antecipem as necessidades do futuro.</li>
        <li><strong>Blockchain e Segurança:</strong> Acreditamos na força da descentralização. Nossa implementação de Blockchain garante registros imutáveis e transações seguras.</li>
        <li><strong>Token Telecoinn:</strong> Introduzimos o Telecoinn, nosso próprio token dedicado, como a espinha dorsal das transações em nosso Marketplace.</li>
      </ul>

      <h2>Compromisso com a Excelência</h2>
      <p>Nossa equipe é composta por profissionais apaixonados, desde engenheiros de redes até especialistas em Blockchain. Juntos, buscamos continuamente a excelência, elevando o padrão da indústria de telecomunicações.</p>

      <h2>Junte-se a Nós Nesta Jornada</h2>
      <p>Estamos entusiasmados em liderar a revolução nas telecomunicações e convidamos você a se juntar a nós nesta jornada. Explore nosso Marketplace, descubra as possibilidades da rede 5G e 6G e experimente o futuro da conectividade.</p>

      <p>No Markteplace Telecom, estamos moldando o amanhã, hoje.</p>
      </div>
      
 
      <Footer />
    </div>
  );
}

export default QuemSomosApp;