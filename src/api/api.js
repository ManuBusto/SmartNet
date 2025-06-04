// api/api.js
const API_URL = 'http://localhost:3000/cadastraSe'; // A URL da sua API

export const cadastrarUsuario = async (formData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    return data;  // Retorna a resposta da API
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    throw error;  // Lança o erro para que possamos tratá-lo no componente
  }
};
