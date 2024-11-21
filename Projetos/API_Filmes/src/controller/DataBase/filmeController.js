import { Router } from 'express';
const endpoint = Router();

import salvarFilme from '../../repository/filmeRepository.js';


endpoint.post( '/filme', ( req, resp ) => {
    try {
        let filme = req.body;

        let id = salvarFilme( filme );

        resp.send({
            id: id
        })
    }
    catch ( err ) {
        resp.status(400).send({
            error: err.message
        })
    }
} )



export default endpoint;