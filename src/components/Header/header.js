// src/components/Header/header.js
import React from 'react';
import './header.css';
import logo from '../imagens/favicon.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>
            <Link to="/">
                <span>Marketplace Telecom</span>
            </Link>

            <Link to="/QuemSomos">
               Quem Somos
            </Link>
            
            <Link to="/login">
                Login
            </Link>

            
            
          
            
            {/* Outros elementos do header */}
        </div>
    );
}

export default Header;
