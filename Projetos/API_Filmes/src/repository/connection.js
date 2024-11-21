import mysql from "mysql2/promise";
  
const con = await mysql.createConnection({

    host: process.env.MySQL_HOST,
    user: process.env.MySQL_USER,
    password: process.env.MySQL_PSW,
    database: process.env.MySQL_DB

})

console.log('---> Conexão com o banco de dados realizado com sucesso!');

export default con;