import React, { useState, useEffect } from 'react';
import '../assets/styles/cadastro.css'; // Importe o CSS que você estiver usando
import cadastro from '../assets/images/cadastro.png';

const Cadastro = () => {
  // State para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    senha: '',
    confirmarSenha: ''
  });

  // Estado para armazenar erros do formulário
  const [errors, setErrors] = useState({
    senhaMatchError: false,
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
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  // Função para submeter o formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmarSenha) {
      setErrors({ senhaMatchError: true, apiError: '' });
      return;
    }

    if (!validarEmail(formData.email)) {
      setErrors({ apiError: 'Email inválido', senhaMatchError: false });
      return;
    }

    // Lógica de cadastro do usuário aqui (ex: fazer a requisição para a API)
    console.log('Usuário cadastrado', formData);
  };

  // UseEffect para adicionar ou remover a classe de fundo preto
  useEffect(() => {
    // Adicionar a classe ao body ao carregar a página
    document.body.classList.add('cadastro-page');

    // Remover a classe ao desmontar o componente (voltar para a página anterior)
    return () => {
      document.body.classList.remove('cadastro-page');
    };
  }, []); // O array vazio faz com que isso aconteça apenas uma vez, quando o componente for montado

  return (
    <div className="cadastro-container"> 
      <div className="cadastro-itensCont1">
        <img src={cadastro} alt="ImgCadastro" className="cadastro" />
      </div>

      <div className="cadastro-itensCont2">
        <div className="cadastro-Titulo">Cadastre-se</div>
        <div className="cadastro-form-container">  
          <form onSubmit={handleSubmit} className="cadastro-form">
            <div className="cadastro-form-group">
              <label htmlFor="nome">Nome*</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>
            <div className="cadastro-form-group">
              <label htmlFor="sobrenome">Sobrenome*</label>
              <input
                type="text"
                id="sobrenome"
                name="sobrenome"
                value={formData.sobrenome}
                onChange={handleChange}
              />
            </div>
            <div className="cadastro-form-group">
              <label htmlFor="email">E-mail*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="cadastro-form-group">
              <label htmlFor="telefone">Telefone*</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
                pattern="^\(\d{2}\) \d{5}-\d{4}$"
                title="Formato: (XX) XXXXX-XXXX"
              />
            </div>
            <div className="cadastro-form-group">
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
            <div className="cadastro-form-group">
              <label htmlFor="confirmarSenha">Confirmar Senha*</label>
              <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                value={formData.confirmarSenha}
                onChange={handleChange}
                required
                minLength="8"
              />
            </div>

            {errors.senhaMatchError && <div className="error-message">As senhas não coincidem!</div>}
            <p>Vamos enviar um link de verificação para esse endereço de e-mail para garantirmos que a conta é sua.</p>
            <button type="submit">Continuar</button>
          </form>
        </div>
      </div>

      <div className="cadastro-itensCont3">
        <div className="cadastro-entreAqui">
          Já tem cadastro? <a href="/login">Entre aqui</a>
        </div>
      </div>
    </div>
  );  
};

export default Cadastro;
