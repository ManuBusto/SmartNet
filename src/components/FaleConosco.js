import React, { useState } from 'react';
import '../assets/styles/faleConosco.css';
import faleConoscoimg from '../assets/images/faleConosWhats.png';

const FaleConosco = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer a lógica de envio, como uma requisição HTTP
    console.log('Formulário enviado:', formData);
  };

  const whatsappLink = `https://wa.me/55{11993175586}?text=Oi,%20gostaria%20de%20falar%20sobre%20${encodeURIComponent(formData.assunto)}`;

  return (
    <div>
      <h2 className="faleConosco-Titulo">Fale Conosco</h2>
      <h2 className="faleConosco-SubTit">Nós estamos muito interessados no que você tem a dizer.</h2>
      <div className="faleConosco-itensCont">
        <p className="faleConosco-descr">Preencha os campos abaixo que a gente entra em contato.</p>
        <div className="faleConosco-form-container">
          <form onSubmit={handleSubmit} className="faleConosco-form">
            <div className="faleConosco-form-group">
              <label htmlFor="id_nome">Nome*</label>
              <input
                type="text"
                id="id_nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="faleConosco-form-group">
              <label htmlFor="id_sobrenome">Sobrenome*</label>
              <input
                type="text"
                id="id_sobrenome"
                name="sobrenome"
                value={formData.sobrenome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="faleConosco-form-group">
              <label htmlFor="id_email">E-mail*</label>
              <input
                type="email"
                id="id_email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="faleConosco-form-group">
              <label htmlFor="id_telefone">Telefone*</label>
              <input
                type="tel"
                id="id_telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="faleConosco-form-group">
              <label htmlFor="id_assunto">Assunto*</label>
              <input
                type="text"
                id="id_assunto"
                name="assunto"
                value={formData.assunto}
                onChange={handleChange}
                required
              />
            </div>

            <div className="faleConosco-form-group">
              <label htmlFor="id_mensagem">Mensagem*</label>
              <textarea
                id="id_mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>


      {/* Botão de Atendimento via WhatsApp com imagem */}
      <div className="whatsapp-button-container">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <img src={faleConoscoimg} alt="ImgWhatsapp" />
          </a>
        </div>

        
    </div>
  );
};

export default FaleConosco;
