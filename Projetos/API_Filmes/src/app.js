  // Principais:
import 'dotenv/config.js';  
import express from 'express';
import cors from 'cors';  


  // Imports:
import route from './route.js';
import "./utils/global/#imports.js";


  // Aplicações:
const servidor = express();
servidor.use( express.json() );
servidor.use( cors() );
rotas( servidor );


  // Ao Rodar:
servidor.listen( process.env.PORTA, () => console.log(`---> API subiu com sucesso na porta ${process.env.PORTA}`) )

