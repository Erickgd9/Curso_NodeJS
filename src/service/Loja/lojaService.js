


export function desconto(total, parcelas, cupom) {
    if ( parcelas > 1 ) {
        let juros = total * 0.05;
        total += juros; 
    }
    if ( cupom == 'QUERO100' ) {
        total -= 100;
    }

    return total;
}
export function percelas (total, parcelas) {
    let valorParcela = total / parcelas;

    return valorParcela;
}

export function calcItens(parcelas, itens, cupom, total) {
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

    return total;
}
