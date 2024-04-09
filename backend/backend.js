//порт 
const PORT = process.env.PORT || 3500;

//инициализация экспресса
const express = require("express");
const server = express();



server.listen(PORT, () => {console.log(`server started on ${PORT}`)});