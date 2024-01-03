// src/components/Header/header.js
import React from 'react';
import './secundHeader.css';
import logo from '../imagens/cpqd-logo-black.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>
            <Link to="/">
                <span>Marketplace Telecom</span>
            </Link>

            <Link to="/Exchange">
               Exchange
            </Link>
            
            <Link to="/login">
                Sair
            </Link>

            
            
          
            
            {/* Outros elementos do header */}
        </div>
    );
}

export default Header;
