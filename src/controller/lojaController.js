// Validação:
// Componentes:
import { Router } from 'express';

const endpoint = Router();


import { pedidoCompletoValidation, pedidoValidation } from '../validation/Loja/lojaValidation.js';


// Processamento:
import { calcItens, desconto, parcelas } from '../service/Loja/lojaService.js';


// Saída:



endpoint.post('/loja/pedido', (req, resp) => {
    try {
        pedidoValidation(req);

        let total = (req.body.total);
        let parcelas = (req.body.parcelas);
        let cupom = (req.query.cupom);

        total = desconto(total, parcelas, cupom);

        let valorParcela = parcelas(total, parcelas);

        resp.send({
            total: total,
            parcelas: parcelas,
            valorParcela: valorParcela
        });

    }
    catch (err) {
        logError(err);
        resp.status(400).send(criarError(err))
    }
});

endpoint.post('loja/pedido/completo', (req, resp) => {
    try {
        pedidoCompletoValidation(req);

        let parcelas = (req.body.parcelas);
        let itens = (req.body.itens);
        let cupom = (req.query.cupom);

        let total = 0;
        total = calcItens(parcelas, itens, cupom, total);

        let valorParcela = parcelas(total, parcelas);

        resp.send({
            total: total,
            parcelas: parcelas,
            valorParcela: valorParcela
        });

    }
    catch (err) {
        logError(err);
        resp.status(400).send(criarError(err))
    }
});

export default endpoint;