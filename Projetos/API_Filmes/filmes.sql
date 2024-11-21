create database catalogoFilmesDB;

use catalogoFilmesDB;

CREATE TABLE tb_filme (
    id_filme        INT PRIMARY KEY AUTO_INCREMENT,
    nm_filme        VARCHAR( 200 ),
    ds_sinopse      VARCHAR( 1000 ),
    vl_avaliacao    DECIMAL( 15, 2 ),
    dt_lancamento   DATE,
    bt_disponivel   BOOLEAN
    img_filme       VARCHAR( 800 )
);

CREATE TABLE tb_usuario (
    id_usuario      INT PRIMARY KEY AUTO_INCREMENT,
    nm_usuario      VARCHAR( 300 ),
    ds_email        VARCHAR( 300 ),
    ds_senha        VARCHAR( 300 )
);

SELECT 
    id_filme,
    nm_filme,
    ds_sinopse,
    vl_avaliacao,
    dt_lancamento,
    bt_disponivel,    
    img_filme
FROM tb_filme;

UPDATE tb_filme
  SET 
    id_filme = ?,
    nm_filme = ?,
    ds_sinopse = ?,
    vl_avaliacao = ?,
    dt_lancamento = ?,
    bt_disponivel = ?,    
    img_filme = ?
WHERE id_filme = ?;

DELETE FROM tb_filme WHERE id_filme = ?;