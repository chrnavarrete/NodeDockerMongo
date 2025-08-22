require('dotenv').config();
const express = require('express');
const connectDB = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.get('/', (req, res) => {
  res.send(`
    <div style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
      <h1> Curso de Contenedores!</h1>
      <p>Hola mundo - EP Newman</p>
      <h1 style="font-weight: bold;">Christian Navarrete</h1>
      <p style="color: green; font-size: 18px;">Push Desarrollador 1</p>
      <p style="color: green; font-size: 18px;">Push Desarrollador 1 Master</p>
      <p style="color: red; font-size: 18px;">Push Desarrollador 2 </p>
    </div>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
