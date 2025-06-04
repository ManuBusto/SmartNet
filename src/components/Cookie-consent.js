
class CookieConsent {
    constructor() {
      this.modal = document.getElementById('cookie-modal');
      this.acceptButton = document.getElementById('accept-cookies');
      this.declineButton = document.getElementById('decline-cookies');
    }
  
    // Exibe o modal
    showModal() {
      this.modal.style.display = 'flex';
    }
  
    // Esconde o modal
    hideModal() {
      this.modal.style.display = 'none';
    }
  
    // Armazena a escolha do usuário e esconde o modal
    acceptCookies() {
      localStorage.setItem('cookiesAccepted', 'true');
      this.hideModal();
    }
  
    declineCookies() {
      localStorage.setItem('cookiesAccepted', 'false');
      this.hideModal();
    }
  
    // Verifica se o usuário já deu consentimento para cookies
    checkConsent() {
      if (localStorage.getItem('cookiesAccepted') === null) {
        this.showModal();
      }
    }
  }
  
  // Inicializa o CookieConsent e faz a verificação
  const cookieConsent = new CookieConsent();
  cookieConsent.checkConsent();
  
  // Ações de clique para os botões de aceitação e recusa
  cookieConsent.acceptButton.addEventListener('click', () => cookieConsent.acceptCookies());
  cookieConsent.declineButton.addEventListener('click', () => cookieConsent.declineCookies());
  