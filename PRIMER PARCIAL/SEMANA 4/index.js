const path = require("path");
const express = require("express");
const cors =  require("cors");
const PUERTO = 8088;

const urltutor = path.join(__dirname,"./tutor.html")
const urltutorado = path.join(__dirname,"./tutorado.html")
const urltutoria = path.join(__dirname,"./tutoria.html")
const urlError = path.join(__dirname,"./error.html")
const urlprincipal = path.join(__dirname,"./principal.html")

const server =  express();

server.use(cors()).use(express.json())

server.get('/', functionprincipal )

server.get('/tutor', (req,res)=>{
    res.status(200).sendFile(urltutor);
})
server.get('/tutorado',(req,res)=>{
    res.status(200).sendFile(urltutorado);
})
server.get('/tutoria',(req,res)=>{
    res.status(200).sendFile(urltutoria);
})
server.use((req,res, next)=>{
    res.status(400).sendFile(urlError);
})

function functionprincipal (req, res){
    res.status(200).sendFile(urlprincipal);
}

server.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo http://localhost:${PUERTO}`);
})