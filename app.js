import express from "express";
const servidor = express();


servidor.get( '/hello_word', ( req, resp ) => {
    resp.send( 'Hello Word :)' );
} );
servidor.get( '/mensagem/boas_vindas', ( req, resp ) => {
    resp.send( 'Olá, sejam bem-vindos e bem-vindas' );
} );
servidor.get( '/v2/mensagem/boas_vindas', ( req, resp ) => {
    resp.send( 'Quem bom que você está aqui! ' );
} );
servidor.get( '/mensagem/ocupado', ( req, resp ) => {
    resp.send( 'Estou ocupado no momento.' );
} );
servidor.get( '/mensagem/ocupado/recado', ( req, resp ) => {
    resp.send( 'Estou ocupado, deixo uma mensagem no email xxxxx' );
} );

servidor.ger( 'calculadora/somar/:n1:n2', ( req, resp ) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let soma =  ( n1 + n2 );
    resp.send( 'A soma é de: ' + soma );
} )

servidor.listen( 5001, () => console.log(`--> API subiu com sucesso na porta 5001 `) );