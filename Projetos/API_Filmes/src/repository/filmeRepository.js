import con from './connection.js';


export default function salvarFilme( filme ) {
    const command = `
        INSERT INTO tb_filme ( nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel )
        VALUES ( ?, ?, ?, ?, ? );
    `

    let resposta = con.query( command, [ filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel ] );
    let info = resposta[ 0 ];

    let idFilme = info.insertId;

    return idFilme;
}