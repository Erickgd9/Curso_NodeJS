


export function pedidoValidation( req ) {
    if ( !req.body.total || isNaN( req.body.total ) ) {
        throw new Error('O parâmetro total esta inválido');
    }
    if ( !req.body.parcelas || isNaN( req.body.parcelas ) ) {
        throw new Error('O parâmetro parcela esta inválido');
    }
}

export function pedidoCompletoValidation( req ) {
    if ( !req.body.parcelas || isNaN(req.body.parcelas)  ) {
        throw new Error('O parâmetro parcela esta inválido');
    }
    if ( !req.body.itens  ) {
        throw new Error('O parâmetro itens esta inválido');
    }
}