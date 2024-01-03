const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 3003;

// Corrigido o nome do banco de dados
const db = new sqlite3.Database('./database.db');

// Função para criar a tabela de usuários
function createUsuariosTable() {
  db.run(`
    CREATE TABLE IF NOT EXISTS tabelaUsers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      login TEXT,
      senha TEXT,
      email TEXT,
      tipoUsuario TEXT,
      publicKey TEXT,
      privateKey TEXT
    )
  `, (err) => {
    if (err) {
      console.error('Erro ao criar a tabela de usuários:', err.message);
    } else {
      console.log('Tabela de usuários criada com sucesso');
    }
  });
}

// Chama a função para criar a tabela
createUsuariosTable();

app.use(express.json());

app.post('/api/cadastrar-usuario', (req, res) => {
  const { login, senha, email, tipoUsuario, publicKey, privateKey } = req.body;

  db.run('INSERT INTO tabelaUsers (login, senha, email, tipoUsuario, publicKey, privateKey) VALUES (?, ?, ?, ?, ?, ?)',
    [login, senha, email, tipoUsuario, publicKey, privateKey], (err) => {
      if (err) {
        console.error('Erro ao inserir dados:', err);
        res.status(500).json({ error: 'Erro interno do servidor' });
      } else {
        console.log('Dados inseridos com sucesso');
        res.json({ success: true });
      }
    });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

