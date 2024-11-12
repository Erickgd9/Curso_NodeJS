// Validação:


// Processamento:
import { somarDoisValores } from '../service/Calculadora/calculadoraService.js';
import { somarValidation } from '../validation/Calculadora/calculadoraValidation.js';


// Saída:
import { criarError } from '../utils/error.js';
import { logError } from '../utils/log.js';


import { Router } from 'express';

const endpoint = Router();


endpoint.get('calculadora/somar/:n1/:n2', (req, resp) => {
    try {
        somarValidation(req);

        let n1 = Number(req.params.n1);
        let n2 = Number(req.params.n2);
        let soma = somarDoisValores(n1, n2);

        resp.send({
            soma: soma
        });
    }
    catch (err) {
        logError( err );
        resp.status(400).send( criarError( err ) )
    }
})

endpoint.get('calculadora/somar2', (req, resp) => {
    try {    
        let n1 = Number(req.query.n1);
        let n2 = Number(req.query.n2);
        let soma = somarDoisValores(n1, n2);
        
        resp.send({
            soma: soma
        });
    } 
    catch ( err ) {
        logError( err );
        resp.status(400).send( criarError( err ) )
    }
})

export default endpoint;