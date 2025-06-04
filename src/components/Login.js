import React, { useState } from 'react';
import '../assets/styles/login.css'; // Importe o CSS necessário

const Login = ({ closeModal }) => {
  // State para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    login: '', // Pode ser email ou telefone
    senha: '',
  });

  // Estado para armazenar erros do formulário
  const [errors, setErrors] = useState({
    loginError: '',
    apiError: '',
  });

  // Função para alterar os dados do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  // Função para validar o email
  const validarEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  // Função para validar o telefone
  const validarTelefone = (telefone) => {
    const regex = /^\(\d{2}\) \d{5}-\d{4}$/; // Padrão para telefone (XX) XXXXX-XXXX
    return regex.test(telefone);
  };

  // Função para submeter o formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validarEmail(formData.login) && !validarTelefone(formData.login)) {
      setErrors({ loginError: 'E-mail ou telefone inválido', apiError: '' });
      return;
    }

    if (formData.senha.length < 8) {
      setErrors({ apiError: 'A senha deve ter no mínimo 8 caracteres', loginError: '' });
      return;
    }

    // Lógica de login do usuário aqui (ex: fazer a requisição para a API)
    console.log('Usuário logado', formData);
    closeModal(); // Fechar a modal após o login
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-form-group">
          <label htmlFor="login">E-mail ou Telefone*</label>
          <input
            type="text"
            id="login"
            name="login"
            value={formData.login}
            onChange={handleChange}
            required
          />
        </div>
        <div className="login-form-group">
          <label htmlFor="senha">Senha*</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
            minLength="8"
          />
        </div>

        {/* Mensagem de erro caso haja algum problema */}
        {errors.loginError && <div className="error-message">{errors.loginError}</div>}
        {errors.apiError && <div className="error-message">{errors.apiError}</div>}

        <div className="login-options">
          <label className="login-checkbox">
            <input type="checkbox" name="manterConectado" />
            Mantenha-me conectado
          </label>
        </div>

        <button type="submit">Entrar</button>
      </form>

      {/* Botão de Fechar modal */}
      <button onClick={closeModal} className="close-modal">Fechar</button>
    </div>
  );
};

export default Login;
