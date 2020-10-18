//importar dependencia

const express = require('express');
const path = require("path");
const pages = require("./pages.js")
// iniciando o express
const server = express();

//criar uma rota para acessar a aplicação. Sem rotas não é possivel acessar.
// utilizando os arquivos estáticos
server.use(express.static("public"))

//configurar template engine
//utilizar body da requisição

server.use(express.urlencoded({extended:true}))

.set("views", path.join(__dirname,"views"))
.set("view engine","hbs")
//rotas da aplicação
server.get("/", pages.index)
server.get("/orphanage", pages.orphanage)
server.get("/orphan", pages.orphan)
server.get("/add-orphanage", pages.addOrphange)
server.post("/save-orphanage",pages.saveOrphanage)
//ligar o servidor
server.listen(5500)

