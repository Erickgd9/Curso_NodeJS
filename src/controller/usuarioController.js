// Validação:


// Processamento:


// Saída:
import { criarError } from '../utils/error.js';
import { logError } from '../utils/log.js';


import multer from 'multer';

let uploadPerfil = multer( { dest: '/storage/perfil' } );

import { Router } from 'express';

const endpoint = Router();


endpoint.post( '/perfil/capa', uploadPerfil.single( 'imagem' ) , ( req, resp )  => {
    try {
        let caminho = req.file.path;
        let extensao = req.file.minetype;
        let nome = req.file.orignalname;

        resp.send({
            caminho: caminho,
            extensao: extensao,
            nome: nome
        })

    }
    catch (err) {
        logError( err );
        resp.status(400).send( criarError( err ) )
    }
} )

export default endpoint;