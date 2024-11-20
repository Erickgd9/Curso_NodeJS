


export function olaValidation ( req ) {
    if ( !req.query.nome ) {
        throw new Error('O parâmetro ( nome ) é obrigatório.');
    }
}