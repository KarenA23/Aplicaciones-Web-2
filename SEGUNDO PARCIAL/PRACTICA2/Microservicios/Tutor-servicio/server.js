const cors = require("cors");
const express  = require("express");
const  { conexionBaseDatos } = require('./model/db.config');
const Tutor = require("./model/Tutor");

const app =  express();
const PUERTO =  4000;

const database = async ()=>{
    await conexionBaseDatos();
}
database();

app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )

app.get('/api/v2/tutor', async (req,res)=>{
    const datos = await Tutor.find()
    res.status(200).send(
        datos
    )
})

app.post ('/api/v2/tutor', async (req,res)=>{
    const { Nombre, Apellido, Identificacion, Experticia} = req.body;
    const tutor = new Tutor({ Nombre, Apellido, Identificacion, Experticia })
    await tutor.save();
    res.status(200).send({
        message:"Dato insertado correctamente",
        tutor
    })
})

app.put('/api/v2/tutor/:id', async (req,res)=>{
    const {id} = req.params;
    const {...data} = req.body;
    const tutor = await Tutor.findByIdAndUpdate(id,data)
    res.status(200).send(
        {
            message:"Dato modificado correctamente",
            tutor
        }
    )
})

app.delete('/api/v2/tutor/:id', async (req,res)=>{
    const {id} =  req.params;
    const tutor = await Tutor.deleteOne(id)
    res.status(200).send({
        response:"El tutor ha sido eliminado correctamente"
    })
})

app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
})