//инициализация подклчения к базе данных
const {Pool} = require("pg");
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "demodb",
    password: "16x#wa9_u",
    port: 4000
});



function getUsers(req, res) {
    
}