import { Router } from 'express';

import multer from 'multer';

let uploadPerfil = multer( { dest: '/storage/perfil' } );

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
        resp.status(400).send({
            error: err.menssage
        })
    }
} )

export default endpoint;