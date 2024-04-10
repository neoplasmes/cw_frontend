//порт 
const PORT = process.env.PORT || 3500;

//инициализация экспресса
const express = require("express");
const server = express();

//инициализация подклчения к базе данных
const {Pool} = require("pg");
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "demodb",
    password: "16x#wa9_u",
    port: 4000
});

pool.query("SELECT * FROM users").then((result) => {
    console.log(result.rows);
});

server.listen(PORT, () => {console.log(`server started on ${PORT}`)});