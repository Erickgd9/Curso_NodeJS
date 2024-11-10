import { Router } from 'express';

const endpoint = Router();

import { calcItens, desconto, percelas } from '../service/Loja/lojaService.js';


endpoint.post( '/loja/pedido', ( req, resp ) => {
    try {
        if ( !req.body.total || isNaN( req.body.total ) ) {
            throw new Error('O parâmetro total esta inválido');
        }
        if ( !req.body.parcelas || isNaN( req.body.parcelas ) ) {
            throw new Error('O parâmetro parcela esta inválido');
        }

        let total = ( req.body.total );
        let parcelas = ( req.body.parcelas );
        let cupom = ( req.query.cupom );

        total = desconto( total, parcelas, cupom );

        let valorParcela = percelas(total, parcelas);

        resp.send( {
            total: total,
            parcelas: parcelas,
            valorParcela: valorParcela
        }  );

    }
    catch ( err ) {
        resp.status(400).send({
            erro: err.message
        })
        
    }

} );

endpoint.post( 'loja/pedido/completo', ( req, resp ) => {
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
        total = calcItens( parcelas, itens, cupom, total );
        
        let valorParcela = parcelas( total, parcelas );

        resp.send( {
            total: total,
            parcelas: parcelas,
            valorParcela: valorParcela
        } );

    }
    catch ( err ) {
        resp.status(400).send( {
            error:  err.message
        } )

    }
} );

export default endpoint;