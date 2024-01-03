import React from 'react';
import Header from '../../components/Header/header.js'; // Ajuste o caminho para Header
import Footer from '../../components/Footer/footer.js'; // Ajuste o caminho para Footer
import Banner from '../../components/Banner/banner.js';
import Container from '../../components/Container/container.js'
function App() {
  return (
    <>
      <Header />
      <Banner/>
      <Container/>
      <Footer />
    </>
  );
}

export default App;
