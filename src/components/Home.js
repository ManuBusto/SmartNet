import React from 'react';
import '../assets/styles/home.css';
import homeImage from '../assets/images/home-img1.png';
import homeOrcamento1 from '../assets/images/orcamento1.png';
import homeDelivery1 from '../assets/images/delivery1.png';
import homeConserto1 from '../assets/images/conserto1.png';
import orcamentoWhats from '../assets/images/orcamentoWhats.png';

function Home() {
  // Link do WhatsApp (ajuste o número conforme necessário)
  const whatsappLink = `https://wa.me/55{11993175586}?text=Oi,%20gostaria%20de%20falar%20sobre%20os%20serviços%20de%20assistência%20técnica`;

  return (
    <div>
      <img src={homeImage} alt="TopoImagem1" className="home-img1" />
      <div className="home-container2">
        <div className="home-itensCont2">
          <img src={homeOrcamento1} alt="AtendimentoImagem1" className="orcamento1" />
          <h1 className="home-title">Orçamento Online</h1>
          <p>
            Central de Atendimento online pelo WhatsApp e orçamento gratuito. Basta enviar uma mensagem com o modelo e o problema
            do phone, watch ou tablet que nós enviaremos pra você o valor do conserto.
          </p>
        </div>
        <div className="home-itensCont2">
          <img src={homeDelivery1} alt="Delivery1" className="delivery1" />
          <h1 className="home-title">Delivery Prático</h1>
          <p>
            Delivery das 08h00 às 21h00, você escolhe o local e agenda o melhor horário para a retirada e devolução do seu phone,
            watch ou tablet. Não se preocupe, executamos esse serviço com total segurança e agilidade.
          </p>
        </div>
        <div className="home-itensCont2">
          <img src={homeConserto1} alt="ConsertoImagem1" className="conserto1" />
          <h1 className="home-title">Conserto Rápido</h1>
          <p>
            Temos um conceito de conserto rápido com alta qualidade, laboratório com equipamentos de última geração e profissionais
            especializados. Garantimos que o aparelho consertado volta para você no mesmo dia.
          </p>
        </div>

        {/* Botão de Atendimento via WhatsApp com imagem */}
        <div className="whatsapp-button-orcamento">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <img src={orcamentoWhats} alt="ImgWhatsapp" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
