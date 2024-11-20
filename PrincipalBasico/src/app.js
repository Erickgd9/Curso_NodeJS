  // Principais:
import 'dotenv/config.js';
import express from "express";
import cors from 'cors';


  // Imports:
import './utils/global/#imports.js';
import rotas from './rotas.js';


  // Aplicações:
const servidor = express();
servidor.use( express.json() );
servidor.use( cors() );
rotas(servidor);    


  // Dar "Type": "module" e "Start": "nodemon *" 

  
  // Ao Rodar:
servidor.listen( process.env.PORTA, () => console.log(`--> API subiu com sucesso na porta ${process.env.PORTA} `) );