import React from 'react';
import '../assets/styles/sobreNos.css';
import orcamentoWhats from '../assets/images/orcamentoWhats.png';


const SobreNos = () => {

  // Link do WhatsApp (ajuste o número conforme necessário)
  const whatsappLink = `https://wa.me/55{11993175586}?text=Oi,%20gostaria%20de%20falar%20sobre%20os%20serviços%20de%20assistência%20técnica`;

  return (
    <div class="sobreNos-container">
      <h1 className="sobreNos-title">Sobre a Smart-Net</h1>
      <p className="sobreNos-texto">
        A Smart-Net é uma assistência técnica especializada em consertos rápidos e de alta qualidade para celulares, smartwatches e tablets. Com uma equipe de profissionais especializados e um laboratório equipado com tecnologia de ponta, nosso compromisso é garantir que os dispositivos, seja para uso pessoal ou corporativo, voltem a funcionar perfeitamente no mesmo dia.
      </p>
      <p className="sobreNos-texto">
        Entendemos a importância dos aparelhos no dia a dia das pessoas e para os negócios, por isso trabalhamos com um atendimento ágil, seguro e eficiente. Através do Whatsapp, você recebe orçamento gratuito e sem compromisso: basta nos enviar o modelo e o problema do dispositivo para receber o valor do conserto. Para sua comodidade, contamos com o serviço de delivery das 08h00 às 21h00, com a possibilidade de escolher o local e o horário mais conveniente para a retirada e devolução do aparelho, tudo com total segurança.
      </p>
      <p className="sobreNos-texto">
        Além de atender o consumidor final, a Smart-Net também oferece soluções inteligentes e personalizadas para empresas. Se a sua empresa precisa de manutenção ou reposição de phones e tablets, nossa assistência técnica corporativa vai otimizar a gestão e o funcionamento desses dispositivos, minimizando qualquer impacto no seu negócio. Garantimos que os dispositivos da sua equipe estejam sempre funcionando, evitando problemas que prejudiquem a operação e aumentando a produtividade.
      </p>
      <p className="sobreNos-texto">
        Com a Smart-Net, você tem a certeza de um serviço de confiança, rapidez e qualidade, tanto para as necessidades individuais quanto para as demandas empresariais.
      </p>

      {/* Botão de Atendimento via WhatsApp com imagem */}
      <div className="whatsapp-button-orcamento">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <img src={orcamentoWhats} alt="ImgWhatsapp" />
        </a>
      </div>




    </div>
  );
}

export default SobreNos;
