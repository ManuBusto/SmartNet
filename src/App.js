import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Empresas from './components/Empresas';
import SobreNos from './components/SobreNos';
import FaleConosco from './components/FaleConosco';
import Cadastro from './components/Cadastro';
import Login from './components/Login';

// Importando os estilos
import './App.css';
// Importando o CSS do modal de cookies
import './assets/styles/cookie-consent.css';


function App() {
  // State para controlar modais
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    functional: false,
    analytics: false,
    marketing: false
  });

  // Estado para controlar se a tela de configurações de cookies deve ser exibida
  const [showCookieSettings, setShowCookieSettings] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Função para salvar preferências de cookies
  const saveCookiePreferences = (preferences) => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setCookiePreferences(preferences);
    setIsCookieModalOpen(false);  // Fechar o modal de cookies após salvar
    setShowCookieSettings(false); // Fechar a tela de configurações de cookies
  };

  // Função para exibir ou esconder as configurações de cookies
  const toggleCookieSettings = () => {
    setShowCookieSettings((prev) => !prev);
  };

  // Voltar para a tela de consentimento inicial
  const goBackToConsent = () => {
    setShowCookieSettings(false); // Voltar para a tela inicial de consentimento
  };

  // Verifica se o usuário já deu consentimento ou recusou
  useEffect(() => {
    const storedPreferences = localStorage.getItem('cookiePreferences');
    if (!storedPreferences) {
      setIsCookieModalOpen(true); // Exibe o modal de cookies inicialmente
    } else {
      setCookiePreferences(JSON.parse(storedPreferences));
    }
  }, []);

  return (
    <Router>
      <Layout openModal={openModal}>
        {/* Modal de login */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-container">
              <Login closeModal={closeModal} />
            </div>
          </div>
        )}

        {/* Modal de consentimento de cookies */}
        {isCookieModalOpen && !showCookieSettings && (
          <div className="cookie-modal-overlay">
            <div className="cookie-modal-container">
              <h3>Usamos Cookies!</h3>
              <p>Utilizamos cookies para melhorar sua experiência. Você pode escolher suas preferências.</p>
              <button onClick={() => saveCookiePreferences({ essential: true, functional: true, analytics: true, marketing: true })}>Aceitar Todos</button>
              <button onClick={() => saveCookiePreferences({ essential: true, functional: false, analytics: false, marketing: false })}>Recusar</button>
              <button onClick={toggleCookieSettings}>Configurar Preferências</button>
            </div>
          </div>
        )}

        {/* Configuração de cookies (aparece apenas quando "Configurar Preferências" é clicado) */}
        {showCookieSettings && (
          <div className="cookie-preferences-container">
            <h3>Configurar Cookies</h3>
            <label>
              <input 
                type="checkbox" 
                checked={cookiePreferences.essential} 
                onChange={() => setCookiePreferences(prev => ({ ...prev, essential: !prev.essential }))} 
              />
              Cookies Essenciais
            </label>
            <label>
              <input 
                type="checkbox" 
                checked={cookiePreferences.functional} 
                onChange={() => setCookiePreferences(prev => ({ ...prev, functional: !prev.functional }))} 
              />
              Cookies Funcionais
            </label>
            <label>
              <input 
                type="checkbox" 
                checked={cookiePreferences.analytics} 
                onChange={() => setCookiePreferences(prev => ({ ...prev, analytics: !prev.analytics }))} 
              />
              Cookies Analíticos
            </label>
            <label>
              <input 
                type="checkbox" 
                checked={cookiePreferences.marketing} 
                onChange={() => setCookiePreferences(prev => ({ ...prev, marketing: !prev.marketing }))} 
              />
              Cookies de Marketing
            </label>
            <button onClick={() => saveCookiePreferences(cookiePreferences)}>Salvar Preferências</button>
            {/* Botão para voltar à tela inicial */}
            <button onClick={goBackToConsent}>Voltar</button>
          </div>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/sobreNos" element={<SobreNos />} />
          <Route path="/faleConosco" element={<FaleConosco />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
