const cors = require("cors");
const express  = require("express");

const app =  express();
const PUERTO =  3000;

app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )

let tutores = [];


app.get('/', (req,res)=>{
    res.status(200).send(
        tutores
    )
})
app.get('/:id', (req,res)=>{
    const {id} =  req.params;
    let result = tutores.filter(p => p.id === id);
    if (result.length>0)
    {
        res.status(200).send(result[0]);
    }
    res.status(404).send({
        "message":"No se puede encontrar el elemento con esa identificación!"
    });
})
app.post('/', (req,res)=>{
    const {body} = req;
    tutores.push(body);
    res.status(200).send({
        message:"Dato insertado correctamente",
        response: body
    })
})
app.put('/', (req,res)=>{
    const {id, nombre, apellido, identificacion, experticia} = req.body;
    let tutor =  tutores.filter(p=> p.id === id)[0] || {}
    
    tutor.nombre = nombre;
    tutor.apellido = apellido;
    tutor.identificacion = identificacion;
    tutor.experticia = experticia;
    
    res.status(200).send(
        {
            message:"El dato fue modificado correctamente",
            response: tutor
        }
    )
})

app.delete('/:id', (req,res)=>{
    const {id} =  req.params;
    tutores = tutores.filter(p => p.id !== id);
    res.status(200).send({
        response:"Se eliminó el tutor con éxito!"
    })
})
app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
})