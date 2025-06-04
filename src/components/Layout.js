import React from 'react';
import { Link } from 'react-router-dom'; 
import '../assets/styles/layout.css'; 
import image from '../assets/images/logo.png';

function Layout({ openModal, children }) { 
  return (
    <div className="grid-layout">
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="logo-link">
            <img src={image} alt="Logo" className="logo" />
          </Link>   
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/empresas">Empresas</Link></li>
            <li><Link to="/sobreNos" id="sobreNos-link">Sobre Nós</Link></li> 
            <li><Link to="/faleConosco">Fale Conosco</Link></li>
          </ul>
          <ul className="nav-links-right">
            <li><Link to="/cadastro">Cadastre-se</Link></li>
            {/* Substituindo <a> por <button> para acessar corretamente a função */}
            <li><button onClick={openModal} className="login-button1">Login</button></li>
          </ul>
        </div>
      </nav>
      <main className="content">
        {children} {/* Renderiza os componentes filhos */}
      </main>

      <footer className="footer">
        <p> &copy; 2024 Smart - NET </p>
        <p>Todos os direitos reservados.</p>
        <p>
          <a className="footer_a" href="/politicaPrivacidade">Política de Privacidade</a>
        </p>
        <p className="footer_signature">M BUSTO</p>
      </footer>
    </div>
  );
}

export default Layout;
