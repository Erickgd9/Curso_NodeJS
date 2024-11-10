import { Router } from 'express';

const endpoint = Router();

import { duplicar, mediaDeTres } from '../service/Exercicios/exerciciosService.js';


endpoint.post( '/media', ( req, resp ) => {

    try {       
        let n1 = ( req.body.nota1 );
        let n2 = ( req.body.nota2 );
        let n3 = ( req.body.nota3 );
    
        let media = mediaDeTres( n1, n2, n3 );
        
        resp.send( {
            media: media
        } );

    }
    catch ( err ) {
        resp.status(400).send({
            error: err.menssage
        })
    }

} )

endpoint.post( '/dobros', ( req, resp ) => {
    try {  
        let nums = ( req.body.numeros );
        
        let nums2 = duplicar(nums);
        
        resp.send( {
            entradas: nums,
            dobros: nums2
        } );
            
    }
        catch ( err ) {
        resp.status(400).send({
            error: err.menssage
        })
    }
    
} );

export default endpoint;