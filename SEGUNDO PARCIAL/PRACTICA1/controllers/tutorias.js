const { response, json, request } = require('express');
const Tutoria = require('../models/tutorias');



const getTutorias = async (req, res= response)=>{
    const tutorias =await  Tutoria.find(); 
    return res.json({tutorias})
}


const getTutoria = async (req=request, res= response)=>{
    const {id} = req.params
    const tutoria =  await Tutoria.findById(id)
    res.json(tutoria);
}

const createTutoria = async(req=request,res=response)=>{
    const {idtutor, idtutorado, asignatura, ndehoras, fecha, hora } =  req.body;
    const tutoriasave = new Tutoria({ idtutor, idtutorado, asignatura, ndehoras, fecha, hora})
    await tutoriasave.save()
    res.status(201).json(tutoriasave);
}

const updateTutoria = async(req,res =  response)=>{
    const {id} = req.params;
    const {...data } =  req.body;
    console.log(id,data)
    const updatedTutoria =  await Tutoria.findByIdAndUpdate(id,data )
    res.json(updatedTutoria);
}
const deleteTutoria =  async (req, res= response)=>{
    const {id} = req.params;
    await Tutoria.findByIdAndDelete(id)
    res.json(`Se ha eliminado la tutoria`);
}

module.exports ={
    getTutorias, 
    getTutoria,
    createTutoria,
    updateTutoria,
    deleteTutoria
}