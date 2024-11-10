import 'dotenv/config.js';

import express from "express";
import cors from 'cors';

import rotas from './rotas.js';


const servidor = express();
servidor.use( express.json() );
servidor.use( cors() );

rotas(servidor);    

// Dar "Type": "module" e "Start": "nodemon *" 

servidor.listen( process.env.PORTA, () => console.log(`--> API subiu com sucesso na porta ${process.env.PORTA} `) );