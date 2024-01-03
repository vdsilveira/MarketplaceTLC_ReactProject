// src/components/Header/header.js
import React from 'react';
import './thirdHeader.css';
import image from '../imagens/favicon.svg';
import { Link } from 'react-router-dom';

const thirdHeader = () => {
    return (
        <div className="header">
            <div className="logo" style={{ backgroundImage: `url(${image})` }}></div>
            <Link to="/">
                <span>Marketplace Telecom</span>
            </Link>

            <Link to="/clienteDashBoard">
               Voltar
            </Link>


            <Link to="/login">
               Sair
            </Link>
            
            
            
            
          
            
            {/* Outros elementos do header */}
        </div>
    );
}

export default thirdHeader;
