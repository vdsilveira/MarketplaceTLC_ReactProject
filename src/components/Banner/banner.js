// banner.js
import React, { useState, useEffect } from 'react';
import styles from "./banner.css";
import telecoinImage1 from "../imagens/banner-home-desk.webp";
import telecoinImage2 from "../imagens/home-5g.webp";
import telecoinImage3 from "../imagens/home-redesprivativas4g5g.webp";

function Banner() {
  const telecoinImages = [telecoinImage1, telecoinImage2, telecoinImage3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Altera a imagem a cada 5 segundos (ajuste conforme necessário)
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % telecoinImages.length);
    }, 3000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, [telecoinImages.length]);

  const bannerStyle = {
    backgroundImage: `url(${telecoinImages[currentImageIndex]})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px',
    paddingTop: '7rem',
  };

  return <div className={styles.banner} style={bannerStyle}></div>;
}

export default Banner;
