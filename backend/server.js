// Importando as dependências
const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Inicializando o app do Express
const app = express();
const PORT = 5000; // Porta para o backend

// Habilitando CORS para permitir requisições de diferentes origens (frontend React)
app.use(cors());
app.use(express.json()); // Para analisar JSON no corpo das requisições

// Criando/abrindo o banco de dados SQLite
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados", err);
  } else {
    console.log("Conectado ao banco de dados SQLite.");
  }
});

// Criando a tabela de usuários (caso não exista)
db.run(`CREATE TABLE IF NOT EXISTS usuarios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  sobrenome TEXT,
  email TEXT,
  telefone TEXT,
  senha TEXT
)`);

// Rota para o cadastro de usuários
app.post('/cadastro', (req, res) => {
  const { nome, sobrenome, email, telefone, senha } = req.body;

  // Inserindo dados do formulário no banco de dados
  const query = `INSERT INTO usuarios (nome, sobrenome, email, telefone, senha) 
                 VALUES (?, ?, ?, ?, ?)`;
  db.run(query, [nome, sobrenome, email, telefone, senha], function (err) {
    if (err) {
      return res.status(500).json({ success: false, message: 'Erro ao cadastrar usuário' });
    }
    res.status(200).json({ success: true, message: 'Usuário cadastrado com sucesso!', id: this.lastID });
  });
});

// Iniciando o servidor na porta configurada
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
