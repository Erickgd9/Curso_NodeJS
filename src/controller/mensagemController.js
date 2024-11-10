import { Router } from 'express';

const endpoint = Router();


endpoint.get( '/hello_word', ( req, resp ) => {
    resp.send( {
        mensagem: 'Hello Word :)'
    } );
} );

endpoint.get( '/mensagem/boas_vindas', ( req, resp ) => {
    resp.send( {
        mensagem: 'Olá, sejam bem-vindos e bem-vindas' 
    } );
} );

endpoint.get( '/v2/mensagem/boas_vindas', ( req, resp ) => {
    resp.send( {
        mensagem: 'Quem bom que você está aqui! ' 
    } );
} );

endpoint.get( '/mensagem/ocupado', ( req, resp ) => {
    resp.send( { 
        mensagem: 'Estou ocupado no momento.'
    } );
} );

endpoint.get( '/mensagem/ocupado/recado', ( req, resp ) => {
    resp.send( {
        mensagem: 'Estou ocupado, deixo uma mensagem no email xxxxx.' 
    } );
} );

endpoint.get( '/mensagem/ola', ( req, resp ) => {
    if ( !resp.query.nome ) {
        resp.status(400).send( {
            erro: 'O parâmetro ( nome ) é obrigatório.'
        } )
        return;
    }

    let nome = ( req.query.nome ?? '!!!' );

    resp.send( {
        mensagem: `Olá ${nome}`
    } );
} )

export default endpoint;