const { response } = require('express')
const { Tutorias} = require('../models')


const createTutorias= async (req, res = response)=>{
    const { status, user, ...body } =  req.body;
    
    const existTutorias =  await Tutorias.findOne({name: body.name})

    if (existTutorias)
    {
        return res.status(400).json({
            msg:`El producto ${ existTutorias.nombre } ya existe`
        })
    }

    const data = {
        ...body,
        name: body.name
    }

    const tutorias = new Tutorias (data);

    const newTutorias =  await tutorias.save();
    res.status(201).json(newTutorias);
}

const deleteTutorias= async (req, res = response)=>{
    const {id} = req.params;
    const deletedTutorias =  await Tutorias.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedTutorias);
}
module.exports = {
    deleteTutorias,
    createTutorias
};