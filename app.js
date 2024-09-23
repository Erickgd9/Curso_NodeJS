import express from "express";
import cors from 'cors';
const servidor = express();

servidor.use( express.json() );
servidor.use( cors() );

// # Baixar express e nodemon.
// Dar "Type" = "module" e "Start" = "nodemon *" 

//  # Parâmetros de Rota.
servidor.get( '/hello_word', ( req, resp ) => {
    resp.send( {
        mensagem: 'Hello Word :)'
    } );
} );
servidor.get( '/mensagem/boas_vindas', ( req, resp ) => {
    resp.send( {
        mensagem: 'Olá, sejam bem-vindos e bem-vindas' 
    } );
} );
servidor.get( '/v2/mensagem/boas_vindas', ( req, resp ) => {
    resp.send( {
        mensagem: 'Quem bom que você está aqui! ' 
    } );
} );
servidor.get( '/mensagem/ocupado', ( req, resp ) => {
    resp.send( { 
        mensagem: 'Estou ocupado no momento.'
    } );
} );
servidor.get( '/mensagem/ocupado/recado', ( req, resp ) => {
    resp.send( {
        mensagem: 'Estou ocupado, deixo uma mensagem no email xxxxx.' 
    } );
} );
servidor.get( 'calculadora/somar/:n1:n2', ( req, resp ) => {
    if ( isNaN( resp.params.n1 ) ) {
        resp.status(400).send( {
            erro: 'Os parâmetros devem ser números.'
        } )
    }

    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let soma =  ( n1 + n2 );

    resp.send( {
        soma: soma
    } );
} )


//  # Parâmetros de Query
servidor.get( 'calculadora/somar2', ( req, resp ) => {
    let n1 = Number(req.query.n1);
    let n2 = Number(req.query.n2);
    let soma =  ( n1 + n2 );

    resp.send( {
        soma: soma
    } );
} )
servidor.get( '/mensagem/ola', ( req, resp ) => {
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


//  # Parâmetros de Corpo.
servidor.post( '/media', ( req, resp ) => {
    let n1 = ( req.body.nota1 );
    let n2 = ( req.body.nota2 );
    let n3 = ( req.body.nota3 );

    let media = ( ( n1 + n2 + n3 )  / 3);
    
    resp.send( {
        media: media
    } );
} )
servidor.post( '/dobros', ( req, resp ) => {
    let nums = ( req.body.numeros );

    let nums2 = [];
    for( let i = 0; i< nums.length; i++ ) {
        nums2[0] = nums[0] * 2;
    }
    resp.send( {
        entradas: nums,
        dobros: nums2
    } );
} );


//  # Combinações
servidor.post( '/loja/pedido', ( req, resp ) => {
    let total = ( req.body.total );
    let parcelas = ( req.body.parcelas );
    let cupom = ( req.query.cupom );

    if ( parcelas < 1 ) {
        let juros = total * 0.05;
        total += juros; 
    }
    if ( cupom == 'QUERO100' ) {
        total -= 100;
    }

    let valorParcela = total / parcelas;

    resp.send( {
        total: total,
        parcelas: parcelas,
        valorParcela: valorParcela
    }  );
} )

servidor.post( 'loja/pedido/completo', ( req, resp ) => {
    try {
        if ( !req.body.parcelas || isNaN(req.body.parcelas)  ) {
            throw new Error('O parâmetro parcela esta inválido');
        }
        if ( !req.body.itens  ) {
            throw new Error('O parâmetro itens esta inválido');
        }


        let parcelas = ( req.body.parcelas );
        let itens = ( req.body.itens );
        let cupom = ( req.query.cupom );

        let total = 0;
        for ( let produto of itens ) {
            total += produto.preco;
        }

        if ( parcelas > 1 ) {
            let juros = total * 0.05;
            total += juros;
        }

        if ( cupom == 'QUERO100' ) {
            total -= 100;
        }

        let valorParcela = total / parcelas;

        resp.send( {
            total: total,
            parcelas: parcelas,
            valorParcela: valorParcela
        } );

    }
    catch ( err ) {
        resp.status(400).send( {
            error:  err.mensage
        } )

    }
} );






servidor.listen( 5001, () => console.log(`--> API subiu com sucesso na porta 5001 `) );