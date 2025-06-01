// index.js
require('dotenv').config();

const port = parseInt(process.env.PORT);

const express = require('express');
const pool = require('./db');

const app = express();
app.use(express.json());

app.get('/users', async (req, res) => {
  try {
    const resultado = await pool.query('SELECT * FROM users');
    res.json(resultado.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar clientes');
  }
});

app.get('/habits', async (req, res) => {
  try {
    const resultado = await pool.query('SELECT * FROM habits');
    res.json(resultado.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar hábitos');
  }
});

app.get('/', (req, res) => {
  res.send('API funcionando!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});