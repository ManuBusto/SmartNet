import React, { useState } from 'react';
import '../assets/styles/empresas.css';
import homeImage from '../assets/images/empresas-img1.png';
import homeOrcamento1 from '../assets/images/orcamento2.png';
import homeDelivery1 from '../assets/images/delivery2.png';
import homeConserto1 from '../assets/images/conserto2.png';
import homePagamento1 from '../assets/images/pagamento1.png';
import orcamentoWhats from '../assets/images/orcamentoWhats.png';

function Home() {
  // Definir o estado do formData
  const [formData, setFormData] = useState({
    assunto: '' // Inicialize o valor como uma string vazia ou o valor desejado
  });

  // Definir o link do WhatsApp com o assunto
  const whatsappLink = `https://wa.me/55{11993175586}?text=Oi,%20gostaria%20de%20falar%20sobre%20${encodeURIComponent(formData.assunto)}`;

  return (
    <div>
      <img src={homeImage} alt="TopoImagem1" className="empresas-img1" />
      <div className='empresas-Container1'>
        <h1 className="title">Assistência Técnica Empresarial</h1>
        <h2 className='subTitle'>A Smart-NET oferece um pacote de soluções inteligentes e personalizadas para atender com
        excelência as necessidades de manutenção ou de reposição dos phones ou tablets da sua empresa.</h2>
      </div>
      <div className="empresas-container2">
        <div className="empresas-itensCont2">
          <img src={homeOrcamento1} alt="AtendimentoImagem2" className="orcamento2" />
          <h1 className="empresas-title">Atendimento Online</h1>
          <p>
          Central de Atendimento online pelo  Whatsapp, basta enviar uma mensagem que vamos retirar, consertar e devolver o aparelho
          no mesmo dia. Assim, sua equipe fica focada no trabalho!
          </p>
        </div>
        <div className="empresas-itensCont2">
          <img src={homeDelivery1} alt="Delivery2" className="delivery2" />
          <h1 className="empresas-title">Delivery Prático</h1>
          <p>
          Delivery gratuito e das 08h00 às 21h00, você escolhe o local e agenda o melhor horário para a retirada e devolução.
          Garantimos a execução desse serviço com total segurança e agilidade.
          </p>
        </div>
        <div className="empresas-itensCont2">
          <img src={homeConserto1} alt="ConsertoImagem2" className="pagamento1" />
          <h1 className="empresas-title">Conserto Rápido</h1>
          <p>
          Temos um conceito de conserto rápido com alto padrão de qualidade, laboratório com equipamentos de última
          geração e profissionais especializados.
          </p>
        </div>
        <div className="empresas-itensCont2">
          <img src={homePagamento1} alt="FaturamentoImagem2" className="pagamento2" />
          <h1 className="empresas-title">Pagamento Faturado</h1>
          <p>
          Para tornar o processo mais eficiente,  seguro e prático oferecemos aos nossos clientes corporativos o benefício do
          pagamento faturado através de boleto bancário. 
          </p>
        </div>
        {/* Botão de Orçamento via WhatsApp com imagem */}
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
