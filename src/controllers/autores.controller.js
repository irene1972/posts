const Autor=require('../models/autores.model');

const getAll=async(req,res)=>{
    try {
        const result = await Autor.selectAll();
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Se ha producido un error al consultar los datos'});
    }
}


module.exports={
    getAll
}