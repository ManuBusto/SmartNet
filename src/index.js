import React from 'react';  // Importa a biblioteca React para construir componentes
import ReactDOM from 'react-dom';  // Importa ReactDOM para manipular o DOM (Document Object Model)
import './index.css';  // Importa o arquivo global de estilos CSS (opcional, mas comum)
import './assets/styles/styles.css'; // Ajuste o caminho conforme necessário
import App from './App';  // Importa o componente principal App da aplicação
import reportWebVitals from './reportWebVitals';  // Opcional: Utilizado para monitorar a performance da aplicação

// Renderiza o componente App no DOM da página HTML
const root = ReactDOM.createRoot(document.getElementById('root')); // O 'root' é o elemento HTML onde a aplicação React será montada
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Opcional: Função para medir a performance da aplicação (pode ser útil em alguns casos)
reportWebVitals();
