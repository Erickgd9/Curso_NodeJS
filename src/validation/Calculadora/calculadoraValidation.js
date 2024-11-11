


export function somarValidation ( req ) {
    if ( isNaN( req.params.n1 ) && isNaN( req.params.n2 ) ) {
        throw new Error('Os parâmetros devem ser números.');        
    }
}