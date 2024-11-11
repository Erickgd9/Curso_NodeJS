import { Router } from 'express';

const endpoint = Router();


import { olaValidation } from '../validation/Mensagem/mansagemValidation.js';


endpoint.get( '/hello_word', ( req, resp ) => {
    try {    
        resp.send( {
            mensagem: 'Hello Word :)'
        } );
    }
    catch ( err ) {
        resp.status(400).send({
            error: err.menssage
        })
    }
} );

endpoint.get( '/mensagem/boas_vindas', ( req, resp ) => {
    try {    
        resp.send( {
            mensagem: 'Olá, sejam bem-vindos e bem-vindas' 
        } );
    }
    catch ( err ) {
        resp.status(400).send({
            error: err.menssage
        })
    }
} );

endpoint.get( '/v2/mensagem/boas_vindas', ( req, resp ) => {
    try {
        resp.send( {
            mensagem: 'Quem bom que você está aqui! ' 
        } );
    }
    catch ( err ) {
        resp.status(400).send({
            error: err.menssage
        })
    }    
} );

endpoint.get( '/mensagem/ocupado', ( req, resp ) => {
    try {
        resp.send( { 
            mensagem: 'Estou ocupado no momento.'
        } );
    }
    catch ( err ) {
        resp.status(400).send({
            error: err.message
        })
    }
} );

endpoint.get( '/mensagem/ocupado/recado', ( req, resp ) => {
    try {
        resp.send( {
            mensagem: 'Estou ocupado, deixe uma mensagem no email xxxxx.'
        } );
    }
    catch ( err ) {
        resp.status(400).send({
            error: err.message
        })
    }
} );

endpoint.get( '/mensagem/ola', ( req, resp ) => {
    try {
        olaValidation( req );
    
        let nome = ( req.query.nome ?? '!!!' );
    
        resp.send( {
            mensagem: `Olá ${nome}`
        } );
    }
    catch ( err ) {
        resp.status(400).send( {
            error: err.message
        })
    }
} )

export default endpoint;