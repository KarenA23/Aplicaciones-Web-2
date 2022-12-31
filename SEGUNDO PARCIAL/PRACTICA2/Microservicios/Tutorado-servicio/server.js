const cors = require("cors");
const express  = require("express");
const  { conexionBaseDatos } = require('./model/db.config');
const Tutorado = require("./model/Tutorado");

const app =  express();
const PUERTO =  4000;

const database = async ()=>{
    await conexionBaseDatos();
}
database();

app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )

app.get('/api/v2/tutorado', async (req,res)=>{
    const datos = await Tutorado.find()
    res.status(200).send(
        datos
    )
})

app.post ('/api/v2/tutorado', async (req,res)=>{
    const { Nombre, Apellido, Identificacion, Carrera} = req.body;
    const tutorado = new Tutorado({ Nombre, Apellido, Identificacion, Carrera })
    await tutorado.save();
    res.status(200).send({
        message:"Dato insertado correctamente",
        tutorado
    })
})

app.put('/api/v2/tutorado/:id', async (req,res)=>{
    const {id} = req.params;
    const {...data} = req.body;
    const tutorado = await Tutorado.findByIdAndUpdate(id,data)
    res.status(200).send(
        {
            message:"Dato modificado correctamente",
            tutorado
        }
    )
})

app.delete('/api/v2/tutorado/:id', async (req,res)=>{
    const {id} =  req.params;
    const tutorado = await Tutorado.deleteOne(id)
    res.status(200).send({
        response:"Tutorado eliminado correctamente"
    })
})

app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
})